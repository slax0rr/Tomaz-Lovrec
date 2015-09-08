<?php
$this->_router->get()->name("/")->action(function() {
    (new \View\Home)->output();
});

$this->_router->name("LandingPad")->action(function() {
    $view = new \View\LandingPad;
    $view->output();
});
