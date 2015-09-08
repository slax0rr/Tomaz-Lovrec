<?php
namespace View\Layout;

use Exception;
use Twig_Environment;
use Twig_Loader_Filesystem;

class Primary
{
    public $template = "";
    public $viewData = [];
    protected $_layout = "Primary";

    public function setLayout($layout)
    {
        if (is_string($layout) === false) {
            throw new Exception("Layout has to be a string");
        }
        $this->_layout = $layout;
    }

    public function getLayout()
    {
        return $this->_layout;
    }

    public function output($template = "", array $options = ["cache" => TWIGCACHE])
    {
        $loader = new Twig_Loader_Filesystem(TEMPLATEPATH);
        $twig = new Twig_Environment($loader, $options);

        if ($template === "") {
            $this->template = $this->_getViewClass($this) . ".html";
        } else {
            $this->template = $template;
        }

        $data = ["content" => $this->template, "contentData" => $this->viewData];

        echo $twig->render("Layout/{$this->_layout}.html", $data);
    }

    protected function _getViewClass($obj)
    {
        $classname = get_class($obj);

        if (preg_match('~^View\\\\(.*)$~', $classname, $matches)) {
            $classname = $matches[1];
        }

        return $classname;
    }
}
