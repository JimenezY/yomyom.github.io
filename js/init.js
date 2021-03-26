exportar  clase  CtrlSaludo  {
  / ** @param { string } nombre * /
  calculaSaludo ( nombre )  {
    const  nombreSinEspacios  =  nombre ? nombre . recortar ( ) : "" ;
    if  ( ! nombreSinEspacios )  {
      lanzar  nuevo  Error ( "Falta proporcionar el nombre." ) ;
    }
    volver  `de Hola $ { nombreSinEspacios } .` ;
  }
}
