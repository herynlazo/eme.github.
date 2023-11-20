JSC.chart('chartDiv',
{
   type:'Vertical column',
   series: [
    {
      name:'Top 3 intelligent people',
      points:[
      { x: 'Einstein', y: 225},
      { x: 'Copernicus', y: 200},
      { x: 'Newton', y: 192}
      ]
    },{
      name:'Richest brand owners in the philippines',
      points:[
      { x: 'Henry Sy', y: 150},
      { x: 'Tony Tan Caktiong', y: 135},
      { x: 'Socorro Ramos', y: 120}
      ]
    },{
      name:'P-POP groups in the Philippines popularity',
      points:[
      { x: 'SB19', y: 140},
      { x: 'ALAMAT', y: 90},
      { x: '1ST ONE', y: 80}
      ]
    }
  ]
});