<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Blog;
use Symfony\Component\HttpFoundation\Response;

class CheckUserTrip
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $blogId = $request->route('blog');
        $blog = Blog::with('trip')->find($blogId);
        // Check if the blog exists and the id is equal to the authenticated user id
        if($blog && $request->user()->id === $blog->trip->user_id){
            return $next($request);
        }
        elseif (! $blog) {
            abort(404, 'Not Found');
        }
        abort(403, 'Unauthorized');
    }
}
