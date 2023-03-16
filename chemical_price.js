function show_price() {
  var chemi_name = document.getElementById("chemicle_product").value;
  // water quantity
  var water_quantity = document.getElementById("Quantity_input").value;
  // Praman
  var praman = document.getElementById("Quantity_praman").value;
  // Barral size ex 100, 200, 500
  var barral = document.getElementById("barral").value;
  // Barral quantity
  var barral_quantity = document.getElementById("barral_input").value;
  //defalt praman
  var d_praman = "";
  //price
  var price = "";

  var product_size = "";

  var unit = "";

  var quantity = "";


  //baral
  if (barral == "none") {
    barral = 200;
  } else {
    barral = barral;
  }
  //praman
  if (chemi_name == "FILJYOTI" && praman == "none") {
    praman = 1;
  }
  else if (chemi_name == "ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE",
    "SCORPIO(LAMADA)", "KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "KOHIPHOS", "SUPERVIT(SULPHAR)", "ENVIL" && praman == "none") {
    praman = 1;
  }
  else if (chemi_name == "FILIKA", "GRAPPLE" && praman == "none") {
    praman = 0.5;
  }
  else if (chemi_name == "FILAZO" && praman == "none") {
    praman = 0.40;
  }
  else if (chemi_name == "IMIDA SUPER(MIDA)", "RUBIGUN(SCOR)" && praman == "none") {
    praman = 0.35;
  }
  else if (chemi_name == "FIL-CM" && praman == "none") {
    praman = 100 / 150;
  }
  else {
    praman = praman;
  }

  //default praman
  if (chemi_name == "FILJYOTI") {
    d_praman = 1;
  }
  else if (chemi_name == "ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE",
    "SCORPIO(LAMADA)", "KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "KOHIPHOS", "SUPERVIT(SULPHAR)", "ENVIL") {
    d_praman = 1;
  }
  else if (chemi_name == "FILIKA", "GRAPPLE") {
    d_praman = 0.5;
  }
  else if (chemi_name == "FILAZO") {
    d_praman = 0.40;
  }
  else if (chemi_name == "IMIDA SUPER(MIDA)", "RUBIGUN(SCOR)") {
    d_praman = 0.35;
  }
  else if (chemi_name == "FIL-CM") {
    d_praman = 100 / 150;
  }
  if (chemi_name == "ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE", "SCORPIO(LAMADA)", "FILIKA", "FILJYOTI", "IMIDA SUPER(MIDA)", "KOHIPHOS", "RUBIGUN(SCOR)", "ENVIL", "FILAZO") {
    first = "1Lr";
    second = "500ml";
    third = "5Lr";
    forth = "10Lr";
  }
  else if (chemi_name == "KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "SUPERVIT(SULPHAR)", "FIL-CM", "GRAPPLE") {
    first = "1kg";
    second = "500gm";
    third = "5kg";
    forth = "10kg";
  }


  // price
  if (chemi_name == "ALKOTHRIN") {
    price = 1200;
    first_p = "₹" + "1200";
    second_p = "Not available";
    third_p = "₹" + "5900";
    forth_p = "Not available";
  }
  else if (chemi_name == "KOHIBAN-50(CLORO)") {
    price = 1000;
    first_p = "₹" + "1000";
    second_p = "Not available";
    third_p = "₹" + "4950";
    forth_p = "Not available";
  }
  else if (chemi_name == "CYCLONE") {
    price = 1800;
    first_p = "₹" + "1800";
    second_p = "Not available";
    third_p = "₹" + "8975";
    forth_p = "Not available";
  }
  else if (chemi_name == "SCORPIO(LAMADA)") {
    price = 2500;
    first_p = "₹" + "2500";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "FILIKA") {
    price = 3300;
    first_p = "₹" + "3300";
    second_p = "Not available";
    third_p = "₹" + "5900";
    forth_p = "Not available";
  }
  else if (chemi_name == "FILJYOTI") {
    price = 2050;
    first_p = "₹" + "2050";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "IMIDA SUPER(MIDA)") {
    price = 2500;
    first_p = "₹" + "2500";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "KASTIN(BAVISTIN)") {
    price = 1480;
    first_p = "₹" + "1480";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "KOHINOOR(MANCHOZEB)") {
    price = 700;
    first_p = "₹" + "700";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "KOHIPHOS") {
    price = 1200;
    first_p = "₹" + "1200";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "RUBIGUN(SCOR)") {
    price = 5000;
    first_p = "₹" + "5000";
    second_p = "₹" + "2525";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "SUPERVIT(SULPHAR)") {
    price = 250;
    first_p = "₹" + "250";
    second_p = "Not available";
    third_p = "₹" + "1225";
    forth_p = "Not available";
  }
  else if (chemi_name == "ENVIL") {
    price = 750;
    first_p = "₹" + "750";
    second_p = "Not available";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "FILAZO") {
    price = 1200;
    first_p = "₹" + "1200";
    second_p = "₹" + "5900";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "FIL-CM") {
    price = 500;
    first_p = "Not available";
    second_p = "₹" + "500";
    third_p = "Not available";
    forth_p = "Not available";
  }
  else if (chemi_name == "GRAPPLE") {
    price = 1100;
    first_p = "Not available";
    second_p = "₹" + "1100";
    third_p = "Not available";
    forth_p = "Not available";
  }

  // a = praman
  // b = default praman
  // c = barral size ex 100,200,500
  // d = barral quantity
  // e = bottle size
  // f = price
  if (chemi_name == "FIL-CM" || chemi_name == "GRAPPLE") {
    product_size = 500;
  } else {
    product_size = 1000;
  }


  // if (chemi_name == "ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE", "SCORPIO(LAMADA)", "FILIKA", "FILJYOTI", "IMIDA SUPER(MIDA)", "KOHIPHOS", "RUBIGUN(SCOR)", "ENVIL", "FILAZO" && water_quantity > 1000) {
  //   unit = "Lr"
  // }
  // else if (chemi_name == "ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE", "SCORPIO(LAMADA)", "FILIKA", "FILJYOTI", "IMIDA SUPER(MIDA)", "KOHIPHOS", "RUBIGUN(SCOR)", "ENVIL", "FILAZO" && water_quantity < 1000) {
  //   unit = "MlLr"
  // }
  // else if (chemi_name == "KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "SUPERVIT(SULPHAR)", "FIL-CM", "GRAPPLE" && water_quantity > 1000) {
  //   unit = "Kg"
  // }
  // else if (chemi_name == "KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "SUPERVIT(SULPHAR)", "FIL-CM", "GRAPPLE" && water_quantity < 1000) {
  //   unit = "Gm"
  // }

  // else if(chemi_name == "ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE", "SCORPIO(LAMADA)", "FILIKA", "FILJYOTI", "IMIDA SUPER(MIDA)", "KASTIN(BAVISTIN)","KOHINOOR(MANCHOZEB)","KOHIPHOS", "RUBIGUN(SCOR)", "SUPERVIT(SULPHAR)","ENVIL", "FILAZO") {
  //   product_size = 1000;
  // }



  // var a = ["ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE", "SCORPIO(LAMADA)", "FILIKA", "FILJYOTI", "IMIDA SUPER(MIDA)", "KOHIPHOS", "RUBIGUN(SCOR)", "ENVIL", "FILAZO"];
  // var b = ["KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "SUPERVIT(SULPHAR)", "FIL-CM", "GRAPPLE"];

  // for (var i = 0; i < a.length; i++) {
  //   if (a[i] === chemi_name && water_quantity >= 1000) {
  //     unit = "Lr"
  //   }
  //   else if (a[i] === chemi_name && water_quantity <= 999) {
  //     unit = "ml"
  //   }
  // }

  // for (var i = 0; i < b.length; i++) {
  //   if (b[i] === chemi_name && water_quantity >= 1000) {
  //     unit = "Kg"
  //   }
  //   else if (b[i] === chemi_name && water_quantity <= 999) {
  //     unit = "gm"
  //   }
  // }

  //a = water quantity
  //b = praman
  //c = product  size
  //d = price


  function for_water(a, b, c, d) {
    quantity = water_quantity * d_praman;

    var y = ["ALKOTHRIN", "KOHIBAN-50(CLORO)", "CYCLONE", "SCORPIO(LAMADA)", "FILIKA", "FILJYOTI", "IMIDA SUPER(MIDA)", "KOHIPHOS", "RUBIGUN(SCOR)", "ENVIL", "FILAZO"];
    var z = ["KASTIN(BAVISTIN)", "KOHINOOR(MANCHOZEB)", "SUPERVIT(SULPHAR)", "FIL-CM", "GRAPPLE"];

    for (var i = 0; i < y.length; i++) {
      if (y[i] === chemi_name && quantity >= 1000) {
        unit = "Lr"
      }
      else if (y[i] === chemi_name && quantity <= 999) {
        unit = "ml"
      }
    }

    for (var i = 0; i < z.length; i++) {
      if (z[i] === chemi_name && quantity >= 1000) {
        unit = "Kg"
      }
      else if (z[i] === chemi_name && quantity <= 999) {
        unit = "gm"
      }
    }

    price = d + " " + "X" + " " + ((quantity < 1000) ? (quantity) + unit : (quantity / c) + unit) + " " + "=" + " " + ("₹" + a * b * d / c);
    price_praman = "-";
  }
  // function for_water(a, b, c, d) {
  //   price = d + " " + "X" + " " + ((a < 1000) ? (a * b) + unit : (a / c * b) + unit) + " " + "=" + " " + (a * b * d / c);
  //   price_praman = "-";
  // }

  function for_water_praman(a, b, p, c, d) {
    price = d + " " + "X" + " " + ((a < 1000) ? (a * p) + unit : (a / c * p) + unit) + " " + "=" + " " + (a * p * d / c);
    price_praman = d + " " + "X" + " " + ((a < 1000) ? (a * b) + unit : (a / c * b) + unit) + " " + "=" + " " + (a * b * d / c);
  }

  if (water_quantity != "") {
    if (praman == "") {
      (for_water(water_quantity, d_praman, product_size, price));
    }
    else if (praman != "") {
      (for_water_praman(water_quantity, praman, d_praman, product_size, price));
    }
  }



  function for_barral(b, c, d, e, f) {
    price = f + " " + "X" + " " + (b * c * d / e) + " " + "=" + " " + (b * c * d / e * f);
    price_praman = "-";
  }

  function for_barral_praman(a, b, c, d, e, f) {
    price = f + " " + "X" + " " + (b * c * d / e) + " " + "=" + " " + (b * c * d / e * f);
    price_praman = f + " " + "X" + " " + (a * c * d / e) + " " + "=" + " " + (b * c * d / e * f);
  }






  // water_quantity = (water_quantity >= 999) ? water_quantity/1000 + "lr" : water_quantity + "ml";



  if (barral_quantity != "") {
    if (praman == "") {
      (for_barral(d_praman, barral_quantity, barral, price));
    }
    else if (praman != "") {
      (for_barral_praman(praman, d_praman, barral_quantity, barral, price));
    }
  }
  // if (barral_quantity != "") {
  //   if (praman == "") {
  //     (for_barral(d_praman, barral_quantity, barral, product_size, price));
  //   }
  //   else if (praman != "") {
  //     (for_barral_praman(praman, d_praman, barral_quantity, barral, product_size, price));
  //   }
  // }


  // if (water_quantity != "") {
  //   if (praman == "") {
  //     (for_water(water_quantity, d_praman, product_size, price));
  //   }
  //   // else if (praman != "") {
  //   //   (sum1(praman, d_praman, barral_quantity, product_size, price));
  //   // }
  // }


  // //end alchothin(1)---------------------------------------------------------------------------------------------------------------------------------------------------------------
  // //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //   if (chemi_name == "KOHIBAN-50(CLORO)") {
  //     first = "1Lr";
  //     second = "500ml";
  //     third = "5Lr";
  //     forth = "10Lr";

  //     first_p = "₹" + "1000";
  //     second_p = "Not available";
  //     third_p = "₹" + "4950";
  //     forth_p = "Not available";
  //   }
  //   // price when barral quantity given
  //   if (chemi_name == "KOHIBAN-50(CLORO)" && barral_quantity != "none" && praman == "") {

  //     if (barral == "none") {
  //       price = "1000" + " " + "X" + " " + (1 * barral_quantity * 200 / 1000) + " " + "=" + " " + (barral_quantity * 200 / 1000 * 1000);
  //       price_praman = "-";
  //     }
  //     else if (barral != "") {
  //       price = "1000" + " " + "X" + " " + (1 * barral * barral_quantity / 1000) + " " + "=" + " " + (barral_quantity * barral / 1000 * 1000);
  //       price_praman = "-";
  //     }
  //   }
  //   else if (chemi_name == "KOHIBAN-50(CLORO)" && barral_quantity != "none" && praman != "") {

  //     if (barral == "none") {
  //       price = "1000" + " " + "X" + " " + (barral_quantity * 200 / 1000) + " " + "=" + " " + (barral_quantity * 200 / 1000 * 1000);
  //       price_praman = "1000" + " " + "X" + " " + (praman * 200 * barral_quantity / 1000) + " " + "=" + " " + (praman * barral_quantity * 200 / 1000 * 1000);
  //     }
  //     else if (barral != "") {
  //       price = "1000" + " " + "X" + " " + (1 * barral * barral_quantity / 1000) + " " + "=" + " " + (barral_quantity * barral / 1000 * 1000)
  //       price_praman = "1000" + " " + "X" + " " + (praman * barral * barral_quantity / 1000) + " " + "=" + " " + (praman * barral_quantity * barral / 1000 * 1000);
  //     }
  //   }

  //   // price when water quantity given
  //   if (chemi_name == "KOHIBAN-50(CLORO)" && water_quantity != "" && praman == "") {

  //     price = "1000" + " " + "X" + " " + (water_quantity * 1 / 1000) + " " + "=" + " " + (water_quantity * 1 / 1000 * 1000);
  //     price_praman = "-";
  //   }
  //   else if (chemi_name == "KOHIBAN-50(CLORO)" && water_quantity != "" && praman != "") {

  //     price = "1000" + " " + "X" + " " + (water_quantity * 1 / 1000) + " " + "=" + " " + (water_quantity * 1 / 1000 * 1000);
  //     price_praman = "1000" + " " + "X" + " " + (water_quantity * praman / 1000) + " " + "=" + " " + (water_quantity * praman / 1000 * 1000);
  //   }
  // //end KOHIBAN-50(CLORO) (2)---------------------------------------------------------------------------------------------------------------------------------------------------------------
  // //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  document.getElementById("price").textContent = price;
  document.getElementById("price_praman").textContent = price_praman;

  document.getElementById("first").textContent = first;
  document.getElementById("second").textContent = second;
  document.getElementById("third").textContent = third;
  document.getElementById("forth").textContent = forth;

  document.getElementById("first_price").textContent = first_p;
  document.getElementById("second_price").textContent = second_p;
  document.getElementById("third_price").textContent = third_p;
  document.getElementById("forth_price").textContent = forth_p;
}


