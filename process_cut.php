<?php
ksort($_POST);

$args = "";
foreach($_POST as $x=>$x_value) {
    $args = $args . " " . urlencode($x_value);
}

$command = "python2 horarios.py $args";

echo shell_exec($command);
?>