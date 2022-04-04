<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Employee Plan View Permission Fetch.
     *    
     * @param Request $request
     * @return jsonArray
     */
    public function employeeDetails(Request $request){
        return $employeeData=Employee::all();
    }

     /**
     * Employee Add.
     *    
     * @param Request $request
     * @return jsonArray
     */
    public function employeeDetailsAdd(Request $request){
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

    public function employeeShowDetails($id){
        return $employeeData=Employee::find($id);
    }

    /**
     *Employee Edit.
     *    
     * @param Request $request
     * @return jsonArray
     */
    public function employeeDetailsEdit(Request $request){
        $customer_id=$request->id;
        $name=$request->name;
        $email=$request->email;
        $image=$request->image;
       
       
        $SubscriptionList=Employee::where('id',$customer_id)->update(['name'=>$name,'email'=>$email,'image'=>$image]);
       
       
        return response()->json([
                'status' => 1,
                'message'=>"Subscription Paused Successfully"
            ]);
     
    }

    /**
     * Employee Delete
     *    
     * Request $request
     * @return jsonArray
     */
    public function employeeDelete(Request $request, $id)
    {
       
        $CustomerAddress=Employee::where('id', $id)->delete();
         $response = array(
                    'status' => 1,
                    'message' => "Address Deleted Successfully",
                );    
            return $response;
    }
}
