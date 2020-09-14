<?php
class api {
    function lookup($departure, $arrival) {
        $_data = fopen("assets/data.csv", "r") or die("Unable to open file!");
        $data = [];
        while(!feof($_data)) {
            $line = fgets($_data);
            $line = str_replace('"', '', $line);
            $line = explode(',', $line);
            array_push($data, $line);
        }
        fclose($_data);
        return $data[intval($arrival)][intval($departure)];
    }
}
?>