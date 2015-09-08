<?php
$this->_router->get()->name("/")->action(function() {
    (new \View\Home)->output("", ["cache" => false]);
});

$this->_router->name("LandingPad")->action(function() {
    $view = new \View\LandingPad;
    $view->output("", ["cache" => false]);
});
