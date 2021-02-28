<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function validator(array $data)
    {


        return Validator::make($data, [
            'name' => ['required', 'string', 'max:20'],
            'email' => ['required', 'string', 'email', 'max:100'],
            'password' => ['required', 'string', 'min:8'],

        ]);
    }

    protected function update(array $data)
    {
        $user = User::where('name', $data['name'])
            ->where('email', $data['email'])->first();
        if ($user) {
            $user->password = Hash::make($data['password']);
            $user->save();


            return true;
        } else {
            throw ValidationException::withMessages(['login' => 'Неверно указан email или login.']);
        }
    }

    public function reset(Request $request)
    {
        $this->validator($request->all())->validate();

        return $this->update($request->all());
    }
}
