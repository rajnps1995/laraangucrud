<?php

use Illuminate\Database\Seeder;
use App\Todo;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create(['name'=>'Wasp']);
        Todo::create(['name'=>'Ram']);

        Todo::create(['name'=>'Wam']);

        Todo::create(['name'=>'Xamp']);
        Todo::create(['name'=>'Lamp']);
        Todo::create(['name'=>'Work']);
        Todo::create(['name'=>'Seed']);
        Todo::create(['name'=>'Loop']);
        Todo::create(['name'=>'Run']);
        Todo::create(['name'=>'Wild']);



    }
}
