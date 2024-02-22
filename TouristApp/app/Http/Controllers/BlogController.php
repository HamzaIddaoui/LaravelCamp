<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;





class BlogController extends Controller
{
    public function __construct() 
    {
        $this->middleware('checkUserTrip')->only('show');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::whereHas('trip', function($query) {
            $query->where('user_id', Auth::id());
        })->with(['trip.itinenaries', 'trip.user'])->orderBy('created_at', 'desc')->get();
        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        try {
            DB::beginTransaction();
            /** 
            $uploadedImage = $request->file('image');
            $filename = $uploadedImage->getClientOriginalName();
            $uploadedImage->move(public_path('images'), $filename);
            **/
            Blog::create([
                'trip_id' => $request->input('trip_id'),
                'description' => $request->input('description'),
                'image' => 'noImageBlog.png'
            ]);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        } finally {
            return Redirect::route('trips.index');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $blog = Blog::with('trip.itinenaries')->find($id);
        return Inertia::render('Blogs/Show', [
            'blog' => $blog
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
