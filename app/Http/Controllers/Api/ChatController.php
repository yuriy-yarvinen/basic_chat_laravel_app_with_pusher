<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Providers\Chat;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{

    public function send(Request $request)
    {
        $user = User::find(Auth::id());
        \event(new Chat($request->message, $user));
    }
}
