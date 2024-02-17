<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Trip;


class Itinerary extends Model
{
    use HasFactory;
    protected $fillable = [
        'date_start',
        'date_end',
        'cityname'
    ];
    protected $casts = [
        'date_start' => 'date',
        'date_end' => 'date'
    ];

    /**
     * Belongs to one Trip Relationship
     */
    public function trip(): BelongsTo
    {
        return $this->belongsTo(Trip::class);
    }
}
