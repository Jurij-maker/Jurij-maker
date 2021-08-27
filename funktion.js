
let datumsangaben  = [
    '10/01/1984',
    '99-99-9999',
    '10-01-1985',
    '01.05.2020',
    '06.12.13.14.45',
    '04/12',
    '05-12',
    '50-50',
    '45/3' 
];



function datumrichtig(a){

if (a.length==5){
    if (isNaN(a.slice(0,2))==false && isNaN(a.slice(3))==false 
       &&(a.charAt(2) == '/' ||a.charAt(2) == '.' 
       ||a.charAt(2) == '-'))
        {
          if (parseInt(a.slice(0,2))>0 && parseInt(a.slice(0,2))<13)
          {return true;}
          else return false;
        }
        else return false;
   }
 else   if (a.length==10){
        if (isNaN(a.slice(0,2))==false && isNaN(a.slice(3,5))==false && isNaN(a.slice(6))==false 
           &&((a.charAt(2) == '/' ||   a.charAt(5) == '/')||(a.charAt(2) == '.' ||   a.charAt(5) == '.') 
           ||(a.charAt(2) == '-' ||   a.charAt(5) == '-')     ))
            {
              if (parseInt(a.slice(0,2))>0 && parseInt(a.slice(0,2))<32 &&parseInt(a.slice(3,5))>0 && parseInt(a.slice(3,5))<13)
              return true;
              else return false;
            }
        else return false;
       }
     else return false;
}

for(let i =0;i<datumsangaben.length; i++)
{
console.log(datumrichtig(datumsangaben[i]))

}

 
