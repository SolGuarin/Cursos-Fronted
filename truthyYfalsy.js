//Valores que son false
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");

//Valores que son true
Boolean("Soleny"); //cualquier strin con mínimo un caracter, incluso puede ser un espacio
Boolean(1); //Cualquier número mayor a 0 da True
Boolean([]); //Puede ser vacío o con datos
Boolean({}); 
Boolean(function(){}); //Cualquier función es verdadera 
Boolean(true); 