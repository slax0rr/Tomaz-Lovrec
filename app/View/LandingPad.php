<?php
namespace View;

use View\Layout\Primary as Layout;

class LandingPad extends Layout
{
    public function __construct()
    {
        $this->setLayout("LandingPad");

        $this->viewData = [
            "protocol"  =>  $_SERVER["SERVER_PROTOCOL"],
            "port"      =>  $_SERVER["SERVER_PORT"],
            "url"       =>  "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"
        ];
    }
}
