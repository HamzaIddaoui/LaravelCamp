<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;


class ExplorerController extends Controller
{
    /**
     * Display all the blogs of the users
     */
    public function index() {
        $blogs = Blog::with(['trip.itinenaries', 'trip.user'])->orderBy('created_at', 'desc')->get();
        return Inertia::render('Explorer/Index', [
            'blogs' => $blogs
        ]);
    }
}
