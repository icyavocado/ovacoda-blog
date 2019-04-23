<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGlobalConfigsTable extends Migration {
  /**
   * Run the migrations.
   */
  public function up() {
    Schema::create('global_configs', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->text('name');
      $table->json('value');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down() {
    Schema::dropIfExists('global_configs');
  }
}
