<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email');
            $table->string('image');
            $table->softDeletes();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });

        \DB::table('employees')->insert([
            array('id'=>1, 'name'=> 'A', 'email'=> 'rr@g.com', 'image'=> 'https://picsum.photos/200/300'),
            array('id'=>2, 'name'=> 'B', 'email'=> 'ss@g.com', 'image'=> 'https://picsum.photos/200/300'),
            array('id'=>3, 'name'=> 'C', 'email'=> 'aa@g.com', 'image'=> 'https://picsum.photos/200/300'),
        ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
