<?php

namespace App\Providers;

use App\Providers\Chat;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ChatEvent
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Chat  $event
     * @return void
     */
    public function handle(Chat $event)
    {
        //
    }
}
