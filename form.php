<!DOCTYPE html>
<html>
<head>

</head>
<body>

  <!-- Barra de navegacion -->
  <?php include("nav.php"); ?>

  <!-- Formulario -->
  <section>
    <form name="tasacion-vivienda" action="email.php" method="post">

    <h1>Completa este formulario y recibe la tasación previa de tu vivienda en 24h. </h1>


    <h6>1. ¿Cuál es tu código postal?</h6>
    <input type="text" name="cp">


    <h6>2. ¿Podrías especificar el tipo de vivienda?</h6>
    <input type="radio" name="tipo-vivienda" value="piso" id="tipo-vivienda-piso"> <label for="tipo-vivienda-piso">Piso</label> <br>
    <input type="radio" name="tipo-vivienda" value="casa-chalet" id="tipo-vivienda-casa-chalet"> <label for="tipo-vivienda-casa-chalet">Casa o chalet</label> <br>
    <input type="radio" name="tipo-vivienda" value="estudio" id="tipo-vivienda-estudio"> <label for="tipo-vivienda-estudio">Estudio</label> <br>
    <input type="radio" name="tipo-vivienda" value="atico" id="tipo-vivienda-atico"> <label for="tipo-vivienda-atico">Ático</label> <br>
    <input type="radio" name="tipo-vivienda" value="duplex" id="tipo-vivienda-duplex"> <label for="tipo-vivienda-duplex">Dúplex</label> <br>


    <h6>3. ¿Cuál es tu dirección?</h6>
    <label for="calle-numero">Calle y número</label> <input type="text" name="calle-numero" id="calle-numero"> <br>
    <label for="planta">Planta</label>
    <select name="planta" id="planta">
      <option value="planta1">1</option>
      <option value="planta2">2</option>
      <option value="planta3">3</option>
      <option value="planta4">4</option>
    </select>
    <br>
    <label for="bloque">Bloque</label> <input type="text" name="bloque" id="bloque"> <br>
    <label for="escalera">Escalera</label> <input type="text" name="escalera" id="escalera"> <br>
    <label for="puerta">Puerta</label> <input type="text" name="puerta" id="puerta"> <br>


    <h6>4. Características principales</h6>
    <label for="superficie">Superfície</label> <input type="text" name="superficie" id="superficie"> <br>
    Número de habitaciones <br>
    <input type="radio" name="num-habitaciones" value="1" id="num-habitaciones-1"> <label for="num-habitaciones-1">1</label> <br>
    <input type="radio" name="num-habitaciones" value="2" id="num-habitaciones-2"> <label for="num-habitaciones-2">2</label> <br>
    <input type="radio" name="num-habitaciones" value="3" id="num-habitaciones-3"> <label for="num-habitaciones-3">3</label> <br>
    <input type="radio" name="num-habitaciones" value="4" id="num-habitaciones-4"> <label for="num-habitaciones-4">4</label> <br>
    <input type="radio" name="num-habitaciones" value="5-mas" id="num-habitaciones-5-mas"> <label for="num-habitaciones-5-mas">5 o más</label> <br>
    ¿Dispone de parking? <br>
    <input type="radio" name="parking" value="si" id="parking-si"> <label for="parking-si">Si</label> <br>
    <input type="radio" name="parking" value="no" id="parking-no"> <label for="parking-no">No</label> <br>
    ¿Dispone de terraza o blacón? <br>
    <input type="radio" name="terraza" value="si" id="terraza-si"> <label for="terraza-si">Si</label> <br>
    <input type="radio" name="terraza" value="no" id="terraza-no"> <label for="terraza-no">No</label> <br>
    ¿Dispone de ascensor? <br>
    <input type="radio" name="ascensor" value="si" id="ascensor-si"> <label for="ascensor-si">Si</label> <br>
    <input type="radio" name="ascensor" value="no" id="ascensor-no"> <label for="ascensor-no">No</label> <br>


    <h6>5. ¿Cuando compraste la propiedad?</h6>
    <label for="fecha-compra">Fecha de compra</label>
    <select name="fecha-compra" id="fecha-compra">
      <option value="25-06-2012">25 de Junio de 2012</option>
      <option value="26-06-2012">26 de Junio de 2012</option>
      <option value="27-06-2012">27 de Junio de 2012</option>
      <option value="28-06-2012">28 de Junio de 2012</option>
    </select>
    <br>

    <h6>6. ¿En qué estado se encuentra la propiedad?</h6>
    <input type="radio" name="estado-propiedad" value="buen-estado" id="estado-propiedad-buen-estado"> <label for="estado-propiedad-buen-estado">Buen estado</label> <br>
    <input type="radio" name="estado-propiedad" value="reforma-ligera" id="estado-propiedad-reforma-ligera"> <label for="estado-propiedad-reforma-ligera">Reforma ligera</label> <br>
    <input type="radio" name="estado-propiedad" value="reforma-integral" id="estado-propiedad-reforma-integral"> <label for="estado-propiedad-reforma-integral">Reforma integral</label> <br>
    <input type="radio" name="estado-propiedad" value="obra-nueva" id="estado-propiedad-obra-nueva"> <label for="estado-propiedad-obra-nueva">Obra nueva</label> <br>

    <h6>7. ¿Cuando te gustaría vender tu propiedad?</h6>
    <input type="radio" name="vender-propiedad" value="antes-posible" id="vender-propiedad-antes-posible"> <label for="vender-propiedad-antes-posible">Lo antes posible</label> <br>
    <input type="radio" name="vender-propiedad" value="3-meses" id="vender-propiedad-3-meses"> <label for="vender-propiedad-3-meses">En 3 meses</label> <br>
    <input type="radio" name="vender-propiedad" value="3-a-6-meses" id="vender-propiedad-3-a-6-meses"> <label for="vender-propiedad-3-a-6-meses">De 3 a 6 meses</label> <br>
    <input type="radio" name="vender-propiedad" value="sin-prisa" id="vender-propiedad-sin-prisa"> <label for="vender-propiedad-sin-prisa">Sin prisa</label> <br>

    <hr>

    <button type="button" value="cancelar" onclick="">Cancelar</button>
    <button type="submit" value="continuar" onclick="">Continuar</button>

    </form>
    </section>

    <div>Preguntas respondidas 0/8</div>

  </body>
</html>