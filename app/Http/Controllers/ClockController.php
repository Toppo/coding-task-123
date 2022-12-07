<?php

namespace App\Http\Controllers;

use App\Models\Clock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Input\Input;

class ClockController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $clock = DB::table('clocks')->find(1);
        return response()->json($clock);
    }

    /**
     * Update the specified resource in storage.
     *update
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        //$clock = DB::table('clocks')->find(1);
        $clock = Clock::find(1);

        $clock->time = $request->input('time');
        $clock->save();
        return response()->json($clock);
    }
}
