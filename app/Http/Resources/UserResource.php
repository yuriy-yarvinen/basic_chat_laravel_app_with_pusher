<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data_array = [
            'id' => $this->id,
            'isLoggedIn' => true
        ];

        $data_json = json_encode($data_array);

        $array = [
            'data' => base64_encode($data_json)
        ];

        return $array;

    }
}
