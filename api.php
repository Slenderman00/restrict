<?php
include_once "classes/api.class.php";
$api = new api();

if(isset($_GET["arrival"]) && isset($_GET["departure"])) {
    if($_GET["arrival"] != "" && $_GET["departure"] != "") {
        $state1 = $api->lookup($_GET["departure"], $_GET["arrival"]);
        $state2 = $api->lookup($_GET["arrival"], $_GET["departure"]);
        $resp = [];
        if($state1 == "i") {
            array_push($resp, 0);
        }
        if($state1 == "z") {
            array_push($resp, 1);
        }
        if($state1 == "") {
            array_push($resp, 2);
        }
        if($state1 == "y") {
            array_push($resp, 3);
        }

        if($state2 == "i") {
            array_push($resp, 0);
        }
        if($state2 == "z") {
            array_push($resp, 1);
        }
        if($state2 == "") {
            array_push($resp, 2);
        }
        if($state2 == "y") {
            array_push($resp, 3);
        }
        echo json_encode(array("respons" => $resp, "countries" => [$_GET["departure"], $_GET["arrival"]]));
    }
}


?>