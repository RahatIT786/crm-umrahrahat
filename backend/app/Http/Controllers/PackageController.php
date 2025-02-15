<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PackageController extends Controller
{
     // Fetch all packages
        // Fetch dummy data
        public function index()
        {
            $packages = [
                ['id' => 1, 'name' => 'Basic Package', 'price' => 100, 'description' => 'Basic package description.'],
                ['id' => 2, 'name' => 'Premium Package', 'price' => 250, 'description' => 'Premium package description.'],
                ['id' => 3, 'name' => 'Luxury Package', 'price' => 500, 'description' => 'Luxury package description.'],
                ['id' => 3, 'name' => 'Karthis Ram', 'price' => 500, 'description' => 'Luxury package description.']
            ];
    
            return response()->json($packages);
        }
}
