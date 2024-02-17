<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use App\Http\Requests\StoreTripRequest;
use App\Http\Requests\UpdateTripRequest;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Models\Itinerary;
use Illuminate\Support\Facades\DB;


class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Trips/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Trips/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTripRequest $request)
    {
        try {
            DB::beginTransaction();

            // Create the Trip 
            $trip = Trip::create([
                'date_start' => $request->input('date_start'),
                'date_end' => $request->input('date_end'),
                'user_id' => auth()->user()->id
            ]);
            // Create the Itinineraries
            foreach($request->input('itineraries') as $itineraryData){
                $itinerary = new Itinerary([
                   'cityname' => $itineraryData['cityname'],
                   'date_start' => $itineraryData['date_start'],
                   'date_end' => $itineraryData['date_end']
            ]);
            // Associate the itinerary with the trip 
            $trip->itinenaries()->save($itinerary);
            DB::commit();
        }

        } catch (\Throwable $th) {
            DB::rollback();
            //throw $th;
        } finally { 
            return Redirect::route('trips.create');
        }
        //return Redirect::route('trips.create')->with('success', 'Trip created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Trip $trip)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Trip $trip)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTripRequest $request, Trip $trip)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Trip $trip)
    {
        //
    }
}
