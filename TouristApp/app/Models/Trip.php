<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Itinerary;
use App\Models\Blog;
use App\Models\User;

class Trip extends Model
{
    use HasFactory;
    protected $fillable = [
        'date_start',
        'date_end',
        'user_id'
    ];
    protected $casts = [
        'date_start' => 'date',
        'date_end' => 'date'
    ];

    /** 
     * Belongs to User Relationship
     */
    public function user(): BelongsTo 
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Has One Blog Relationship
     */
    public function blog(): HasOne
    {
        return $this->hasOne(Blog::class);
    }

    /**
     * Has Many itineraries Relationship
     */
    public function itinenaries(): HasMany
    {
        return $this->hasMany(Itinerary::class);
    }


}
