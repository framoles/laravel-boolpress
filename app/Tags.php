<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    //
    protected $fillable = ["name"];
    protected $table = "tags";

    public function post(){
        return $this->belongsToMany(Post::class);
    }
}
