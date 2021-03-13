<?php

namespace App\Http\Controllers\Api;

use App\Chat;
use App\Http\Controllers\Controller;
use App\Providers\ChatEvent;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{

    public function send(Request $request)
    {
        $user = User::find(Auth::id());
        $data = [
            'message'=>$request->message,
            'user_id'=>$user->id,
            'user_name'=>$user->name,
        ];
        Chat::create($data);
        \event(new ChatEvent($request->message,$user));
    }

    public function getChat()
    {
        return Chat::limit(20)->orderBy('created_at','desc')->get();
    }
}
