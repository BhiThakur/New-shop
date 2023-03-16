// to stop entering other than number
function isnumber(evt) {
  var num = String.fromCharCode(evt.which);

  if (!(/[0-9 .]/.test(num))) {
    evt.preventDefault();
  }
}


// change praman color 
function changecolor(event) {
  var chemi_name = document.getElementById("chemicle_product").value;
  if (chemi_name == "ALKOTHRIN" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "KOHIBAN-50(CLORO)" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "CYCLONE" && event.target.value > 1.5) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "SCORPIO(LAMADA)" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "FILIKA" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "FILJYOTI" && event.target.value > 2) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "IMIDA SUPER(MIDA)" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "KASTIN(BAVISTIN)" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "KOHINOOR(MANCHOZEB)" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "KOHIPHOS" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "RUBIGUN(SCOR)" && event.target.value > 0.50) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "SUPERVIT(SULPHAR)" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "ENVIL" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "FILAZO" && event.target.value > 0.50) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "FIL-CM" && event.target.value > 1) {
    event.target.style.color = "red";
  }
  else if (chemi_name == "GRAPPLE" && event.target.value > 0.50) {
    event.target.style.color = "red";
  }
  else {
    event.target.style.color = "black";
  }
}

// if quantity is not empty barall will be dessable
function myFunction() {
  var ChemiQut = document.getElementById("Quantity_input").value;
  if (ChemiQut != "") {
    document.getElementById("barral_input").disabled = true;
  }
  else {
    document.getElementById("barral_input").disabled = false;
  }
}

// if barral is not empty quantity will be dessable or vicevarsa
function myFunction2() {
  var barral_qty = document.getElementById("barral_input").value;
  if (barral_qty != "") {
    document.getElementById("Quantity_input").disabled = true;
  }
  else {
    document.getElementById("Quantity_input").disabled = false;
  }
}


function chemical() {
  // Chemical name
  var chemi_name = document.getElementById("chemicle_product").value;
  // water quantity
  var water_quantity = document.getElementById("Quantity_input").value;
  // Praman
  var praman = document.getElementById("Quantity_praman").value;
  // Barral size ex 100, 200, 500
  var barral = document.getElementById("barral").value;
  // Barral quantity
  var barral_quantity = document.getElementById("barral_input").value;

  // kiti aushadh lagel te
  var product_quantity = "";

  // dilelya barral madhe kiti pani hoil ex - 5 barral * 200
  var water_in_barral = "";

  // dileya panyat kiti barral hotil ex - 1000 / 200 
  var number_of_barrals = "";

  // dilelya pramanane kiti aaushadh lagel te
  var product_quantity_with_given_praman = "";


  //alchothrin start
  //alchothrin watar qantity start
  if (chemi_name == "ALKOTHRIN" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "ALKOTHRIN" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //alchothrin watar qantity end

  // alchothrin barral qantity start
  if (chemi_name == "ALKOTHRIN" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "ALKOTHRIN" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }

  //KOHIBAN-50(CLORO) start
  //KOHIBAN-50(CLORO) watar qantity start
  if (chemi_name == "KOHIBAN-50(CLORO)" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "KOHIBAN-50(CLORO)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //KOHIBAN-50(CLORO) watar qantity end

  // KOHIBAN-50(CLORO) barral qantity start
  if (chemi_name == "KOHIBAN-50(CLORO)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "KOHIBAN-50(CLORO)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //KOHIBAN-50(CLORO) barral qantity end
  //KOHIBAN-50(CLORO) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //CYCLONE start
  //CYCLONE watar qantity start
  if (chemi_name == "CYCLONE" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "CYCLONE" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //CYCLONE watar qantity end

  // CYCLONE barral qantity start
  if (chemi_name == "CYCLONE" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "CYCLONE" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //CYCLONE barral qantity end
  //CYCLONE end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //SCORPIO(LAMADA) start
  //SCORPIO(LAMADA) watar qantity start
  if (chemi_name == "SCORPIO(LAMADA)" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "SCORPIO(LAMADA)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //SCORPIO(LAMADA) watar qantity end

  // SCORPIO(LAMADA) barral qantity start
  if (chemi_name == "SCORPIO(LAMADA)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "SCORPIO(LAMADA)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //SCORPIO(LAMADA) barral qantity end
  //SCORPIO(LAMADA) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //FILIKA start
  //FILIKA watar qantity start
  if (chemi_name == "FILIKA" && praman == "") {
    product_quantity = water_quantity * 0.5;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "FILIKA" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //FILIKA watar qantity end

  // FILIKA barral qantity start
  if (chemi_name == "FILIKA" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "FILIKA" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //FILIKA barral qantity end
  //FILIKA end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //FILJYOTI start
  //FILJYOTI watar qantity start
  if (chemi_name == "FILJYOTI" && praman == "") {
    product_quantity = water_quantity * 2;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "FILJYOTI" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //FILJYOTI watar qantity end

  // FILJYOTI barral qantity start
  if (chemi_name == "FILJYOTI" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "FILJYOTI" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //FILJYOTI barral qantity end
  //FILJYOTI end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //IMIDA SUPER(MIDA) start
  //IMIDA SUPER(MIDA) watar qantity start
  if (chemi_name == "IMIDA SUPER(MIDA)" && praman == "") {
    product_quantity = water_quantity * 0.35;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "IMIDA SUPER(MIDA)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //IMIDA SUPER(MIDA) watar qantity end

  // IMIDA SUPER(MIDA) barral qantity start
  if (chemi_name == "IMIDA SUPER(MIDA)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "IMIDA SUPER(MIDA)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //IMIDA SUPER(MIDA) barral qantity end
  //IMIDA SUPER(MIDA) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //KASTIN(BAVISTIN) start
  //KASTIN(BAVISTIN) watar qantity start
  if (chemi_name == "KASTIN(BAVISTIN)" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "KASTIN(BAVISTIN)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //KASTIN(BAVISTIN) watar qantity end

  // KASTIN(BAVISTIN) barral qantity start
  if (chemi_name == "KASTIN(BAVISTIN)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "KASTIN(BAVISTIN)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //KASTIN(BAVISTIN) barral qantity end
  //KASTIN(BAVISTIN) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //KOHINOOR(MANCHOZEB) start
  //KOHINOOR(MANCHOZEB) watar qantity start
  if (chemi_name == "KOHINOOR(MANCHOZEB)" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "KOHINOOR(MANCHOZEB)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //KOHINOOR(MANCHOZEB) watar qantity end

  // KOHINOOR(MANCHOZEB) barral qantity start
  if (chemi_name == "KOHINOOR(MANCHOZEB)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "KOHINOOR(MANCHOZEB)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //KOHINOOR(MANCHOZEB) barral qantity end
  //KOHINOOR(MANCHOZEB) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //KOHIPHOS start
  //KOHIPHOS watar qantity start
  if (chemi_name == "KOHIPHOS" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "KOHIPHOS" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //KOHIPHOS watar qantity end

  // KOHIPHOS barral qantity start
  if (chemi_name == "KOHIPHOS" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "KOHIPHOS" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //KOHIPHOS barral qantity end
  //KOHIPHOS end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //RUBIGUN(SCOR) start
  //RUBIGUN(SCOR) watar qantity start
  if (chemi_name == "RUBIGUN(SCOR)" && praman == "") {
    product_quantity = water_quantity * 0.35;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "RUBIGUN(SCOR)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //RUBIGUN(SCOR) watar qantity end

  // RUBIGUN(SCOR) barral qantity start
  if (chemi_name == "RUBIGUN(SCOR)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "RUBIGUN(SCOR)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //RUBIGUN(SCOR) barral qantity end
  //RUBIGUN(SCOR) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //SUPERVIT(SULPHAR) start
  //SUPERVIT(SULPHAR) watar qantity start
  if (chemi_name == "SUPERVIT(SULPHAR)" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "SUPERVIT(SULPHAR)" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //SUPERVIT(SULPHAR) watar qantity end

  // SUPERVIT(SULPHAR) barral qantity start
  if (chemi_name == "SUPERVIT(SULPHAR)" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "SUPERVIT(SULPHAR)" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //SUPERVIT(SULPHAR) barral qantity end
  //SUPERVIT(SULPHAR) end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //ENVIL start
  //ENVIL watar qantity start
  if (chemi_name == "ENVIL" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "ENVIL" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //ENVIL watar qantity end

  // ENVIL barral qantity start
  if (chemi_name == "ENVIL" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "ENVIL" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //ENVIL barral qantity end
  //ENVIL end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //FILAZO start
  //FILAZO watar qantity start
  if (chemi_name == "FILAZO" && praman == "") {
    //product_quantity = water_quantity * 1;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "FILAZO" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //FILAZO watar qantity end

  // FILAZO barral qantity start
  if (chemi_name == "FILAZO" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "FILAZO" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //FILAZO barral qantity end
  //FILAZO end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //FILAZO start
  //FILAZO watar qantity start
  if (chemi_name == "FILAZO" && praman == "") {
    product_quantity = water_quantity * 0.40;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "FILAZO" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //FILAZO watar qantity end

  // FILAZO barral qantity start
  if (chemi_name == "FILAZO" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "FILAZO" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //FILAZO barral qantity end
  //FILAZO end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //FIL-CM start
  //FIL-CM watar qantity start
  if (chemi_name == "FIL-CM" && praman == "") {
    product_quantity = water_quantity * 150 / 100;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "FIL-CM" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //FIL-CM watar qantity end

  // FIL-CM barral qantity start
  if (chemi_name == "FIL-CM" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "FIL-CM" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //FIL-CM barral qantity end
  //FIL-CM end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  //GRAPPLEstart
  //GRAPPLE watar qantity start
  if (chemi_name == "GRAPPLE" && praman == "") {
    product_quantity = water_quantity * 0.5;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }

  else if (chemi_name == "GRAPPLE" && praman != "") {
    //product_quantity = water_quantity * praman;

    if (barral == "none") {
      number_of_barrals = (Math.ceil(water_quantity / 200));
    }
    else if (barral != "") {
      number_of_barrals = (Math.ceil(water_quantity / barral));
    }
  }
  //GRAPPLE watar qantity end

  // GRAPPLE barral qantity start
  if (chemi_name == "GRAPPLE" && barral == "none") {
    water_in_barral = barral_quantity * 200;

  }
  else if (chemi_name == "GRAPPLE" && barral != "") {
    water_in_barral = barral_quantity * barral;
  }
  //GRAPPLE barral qantity end
  //GRAPPLE end
  //----------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------------

  // document.getElementById("total_quantity").textContent = product_quantity;
  document.getElementById("total_barrals").textContent = number_of_barrals;
  document.getElementById("total_water_barrals").textContent = water_in_barral;
}





