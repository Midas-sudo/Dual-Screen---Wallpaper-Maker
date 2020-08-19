<?php
ksort($_POST);

$coords = $_GET['coords'];

$coord = str_replace("%20", " ", $coords);

$command = "python cutter.py $coords";

echo shell_exec($command);

//header( 'Location: /index.html' );
?>
