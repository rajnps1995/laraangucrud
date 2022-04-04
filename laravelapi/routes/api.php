<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:employee-api')->group( function () {




// });

 /*********** Employee View. ******************/

// Route::get('/employee_details','EmployeeController@employeeDetails');

// //  /*********** Employee Add. ******************/
//  Route::post('/employee_add','EmployeeController@employeeDetailsAdd');

// //  /*********** Employee Edit******************/
//  Route::get('/employee_edit/{id}','EmployeeController@employeeShowDetails');

//  Route::put('/employee_update/{id}','EmployeeController@employeeDetailsEdit');

//  /*********** Employee Delete *****************/


//  Route::post('/employee_delete/{id}','EmployeeController@employeeDelete');

Route::resource('employees','EmpController');

Route::get('todos','TodoController@index');

