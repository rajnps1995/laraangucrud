<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;

class EmpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $employeeData=Employee::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name=$request->name;
        $email=$request->email;
        $image=$request->image;
       
       $employeeDetails=new Employee();
       $employeeDetails->name=$name;
       $employeeDetails->email=$email;
       $employeeDetails->image=$image;

       $employeeDetails->save();
        return response()->json([
                'status' => 1,
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $employeeData=Employee::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $name=$request->name;
        $email=$request->email;
        $image=$request->image;
       
       
        $SubscriptionList=Employee::where('id',$id)->update(['name'=>$name,'email'=>$email,'image'=>$image]);
       
       
        return response()->json([
                'status' => 1,
                'message'=>"Subscription Paused Successfully"
            ]);
     
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $CustomerAddress=Employee::where('id', $id)->delete();
        $response = array(
                   'status' => 1,
                   'message' => "Employee Deleted Successfully",
               );    
           return $response;
    }
}
