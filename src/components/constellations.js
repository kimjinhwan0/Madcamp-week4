//겨울철 별자리
export const orion = [
    { name: 'Betelgeuse', ra: 1.5368, dec: 0.1292, size: 5, color: 'yellow' },
    { name: 'Rigel', ra: 1.3725, dec: -0.1432, size: 4, color: 'blue' },
    { name: 'Bellatrix', ra: 1.4182, dec: 0.1108, size: 3, color: 'red' },
    { name: 'Mintaka', ra: 1.4483, dec: -0.0052, size: 5, color: 'white' },
    { name: 'Alnilam', ra: 1.4672, dec: -0.021, size: 4, color: 'green' },
    { name: 'Alnitak', ra: 1.4863, dec: -0.0339, size: 3, color: 'purple' },
    { name: 'Saiph', ra: 1.5171, dec: -0.1687, size: 4, color: 'orange' }
  ];
  
  export const orionLines = [
    [0, 2], [2, 3], [3, 1], [1, 6], [6, 5], [5, 4], [4, 3], [0, 5]
  ];
  
  export const canisMajor = [
    { name: 'Sirius', ra: 1.0163, dec: -0.2917, size: 5, color: 'white' },
    { name: 'Mirzam', ra: 0.9895, dec: -0.3136, size: 4, color: 'blue' },
    { name: 'Muliphein', ra: 1.1948, dec: -0.2725, size: 3, color: 'blue' },
    { name: 'Wezen', ra: 1.2290, dec: -0.4602, size: 5, color: 'yellow' },
    { name: 'Aludra', ra: 1.2950, dec: -0.5116, size: 4, color: 'blue' },
    { name: 'Adhara', ra: 1.1781, dec: -0.5058, size: 5, color: 'blue' },
    { name: 'Furud', ra: 1.2655, dec: -0.5405, size: 4, color: 'blue' },
    { name: 'Omicron2', ra: 1.2036, dec: -0.4213, size: 3, color: 'red' }
  ];
  
  export const canisMajorLines = [
    [0, 1], [0, 2], [0, 7], [7, 3], [3, 4], [3, 5], [5, 6]
  ];
  
  export const taurus = [
  { name: 'Alnath', ra: 1.430, dec: 0.500, size: 1.65, color: 'blue-white' },
  { name: 'Tau Tauri', ra: 1.238, dec: 0.401, size: 4.28, color: 'blue-white' },
  { name: 'Ain', ra: 1.178, dec: 0.336, size: 3.53, color: 'orange' },
  { name: 'Gamma Tauri', ra: 1.140, dec: 0.274, size: 3.65, color: 'orange' },
  { name: 'Aldebaran', ra: 1.204, dec: 0.288, size: 0.85, color: 'orange' },
  { name: 'Zeta Tauri', ra: 1.480, dec: 0.369, size: 3.00, color: 'blue-white' },
  { name: 'Omicron Tauri', ra: 0.861, dec: 0.149, size: 3.61, color: 'blue-white' }
  ];
  
  export const taurusLines = [
    [5,4],[3,6],[2,3],[2,1],[0,1],[4,3]
  ];

  // 여름철 별자리

  export const lyra = [
  { name: 'Vega', ra: 4.872, dec: 0.676, size: 0.03, color: 'blue-white' },
  { name: 'Sheliak', ra: 4.930, dec: 0.582, size: 3.52, color: 'blue-white' },
  { name: 'Sulafat', ra: 4.970, dec: 0.570, size: 3.24, color: 'blue-white' },
  { name: 'Delta Lyrae', ra: 4.947, dec: 0.646, size: 4.30, color: 'blue-white' },
  // { name: 'Epsilon Lyrae', ra: 4.906, dec: 0.692, size: 4.67, color: 'blue-white' },
  { name: 'Zeta Lyrae', ra: 4.905, dec: 0.656, size: 4.34, color: 'blue-white' },
  // { name: 'Theta Lyrae', ra: 4.960, dec: 0.664, size: 4.36, color: 'blue-white' }
];

export const lyraLines = [
  [0, 5], [5, 1],[1,2],[2, 3],[5,3]
];

export const cygnus = [
  { name: 'Deneb', ra: 5.421, dec: 0.792, size: 1.29, color: 'white' },
  { name: 'Sadr', ra: 5.337, dec: 0.704, size: 2.34, color: 'white' },
  { name: 'Albireo', ra: 5.113, dec: 0.489, size: 3.20, color: 'yellow' },
  { name: 'Gienah', ra: 5.442, dec: 0.594, size: 2.64, color: 'blue-white' },
  { name: 'Mu Cygni', ra: 5.695, dec: 0.504, size: 4.59, color: 'white' },
  { name: 'Rukh', ra: 5.174, dec: 0.789, size: 2.86, color: 'blue-white' },
  { name: 'Kappa Cygni', ra: 5.051, dec: 0.932, size: 3.94, color: 'yellow-white' }
];

export const cygnusLines = [
  [0, 2], [1, 2], [2, 4],[2,3],[6,5] 
];

export const aquila = [
  { name: 'Altair', ra: 5.197, dec: 0.155, size: 0.77, color: 'white' },
  { name: 'Tarazed', ra: 5.178, dec: 0.185, size: 2.72, color: 'yellow' },
  { name: 'Alshain', ra: 5.215, dec: 0.112, size: 3.71, color: 'yellow' },
  { name: 'Delta Aquilae', ra: 5.085, dec: 0.054, size: 3.36, color: 'yellow-white' },
  { name: 'Zeta Aquilae', ra: 5.210, dec: 0.242, size: 2.99, color: 'blue-white' },
  { name: 'Theta Aquilae', ra: 5.221, dec: 0.185, size: 3.23, color: 'blue-white' }
];

export const aquilaLines = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
];

// 가을철 별자리

export const pegasus = [
    { name: 'Markab', ra: 6.042, dec: 0.265, size: 2.49, color: 'blue-white' },
    { name: 'Scheat', ra: 6.038, dec: 0.489, size: 2.42, color: 'red' },
    { name: 'Algenib', ra: 0.058, dec: 0.265, size: 2.84, color: 'blue-white' },
    { name: 'Enif', ra: 5.696, dec: 0.172, size: 2.39, color: 'orange' },
    { name: 'Matar', ra: 5.948, dec: 0.527, size: 2.95, color: 'yellow-white' },
    { name: 'Baham', ra: 5.805, dec: 0.108, size: 3.50, color: 'yellow-white' }
  ];
  
  export const pegasusLines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
  ];
  
  export const andromeda = [
    { name: 'Alpheratz', ra: 0.037, dec: 0.508, size: 2.06, color: 'blue-white' },
    { name: 'Mirach', ra: 0.304, dec: 0.622, size: 2.07, color: 'red' },
    { name: 'Almach', ra: 0.541, dec: 0.739, size: 2.10, color: 'orange' },
    { name: 'Adhil', ra: 0.514, dec: 0.793, size: 4.88, color: 'yellow-white' },
    { name: 'Iota Andromedae', ra: 6.191, dec: 0.755, size: 4.29, color: 'yellow-white' }
  ];
  
  export const andromedaLines = [
    [0, 1], [1, 2], [2, 3], [3, 4]
  ];
  
  export const cassiopeia = [
    { name: 'Schedar', ra: 0.177, dec: 0.987, size: 2.24, color: 'orange' },
    { name: 'Caph', ra: 0.040, dec: 1.032, size: 2.27, color: 'yellow' },
    { name: 'Tsih', ra: 0.247, dec: 1.051, size: 2.15, color: 'blue-white' },
    { name: 'Ruchbah', ra: 0.374, dec: 1.051, size: 2.68, color: 'blue-white' },
    { name: 'Segin', ra: 0.663, dec: 1.077, size: 3.38, color: 'blue-white' }
  ];
  
  export const cassiopeiaLines = [
    [0, 1], [1, 2], [2, 3], [3, 4]
  ];
  
  //봄철 별자리

  export const leo = [
    { name: 'Regulus', ra: 2.654, dec: 0.209, size: 1.35, color: 'blue-white' },
    { name: 'Denebola', ra: 3.093, dec: 0.254, size: 2.14, color: 'blue-white' },
    { name: 'Algieba', ra: 2.705, dec: 0.346, size: 2.01, color: 'orange' },
    { name: 'Zosma', ra: 2.942, dec: 0.358, size: 2.56, color: 'blue-white' },
    { name: 'Chort', ra: 2.690, dec: 0.409, size: 3.34, color: 'blue-white' },
    { name: 'Alterf', ra: 2.537, dec: 0.454, size: 4.31, color: 'orange' }
  ];
  
  export const leoLines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
  ];

  export const virgo = [
    { name: 'Spica', ra: 3.514, dec: -0.195, size: 0.98, color: 'blue-white' },
    { name: 'Porrima', ra: 3.324, dec: -0.025, size: 2.74, color: 'yellow-white' },
    { name: 'Vindemiatrix', ra: 3.413, dec: 0.191, size: 2.83, color: 'yellow' },
    { name: 'Heze', ra: 3.292, dec: -0.012, size: 3.38, color: 'blue-white' },
    { name: 'Auva', ra: 3.385, dec: 0.059, size: 3.87, color: 'red' }
  ];
  
  export const virgoLines = [
    [0, 1], [1, 2], [2, 3], [3, 4]
  ];

  export const ursaMajor = [
    { name: 'Alioth', ra: 3.377, dec: 0.977, size: 1.76, color: 'blue-white' },
    { name: 'Dubhe', ra: 2.888, dec: 1.078, size: 1.81, color: 'yellow-white' },
    { name: 'Alkaid', ra: 3.612, dec: 0.861, size: 1.85, color: 'blue-white' },
    { name: 'Mizar', ra: 3.508, dec: 0.958, size: 2.23, color: 'blue-white' },
    { name: 'Phecda', ra: 3.115, dec: 0.937, size: 2.44, color: 'white' },
    { name: 'Merak', ra: 2.888, dec: 0.984, size: 2.37, color: 'blue-white' },
    { name: 'Alcor', ra: 3.514, dec: 0.959, size: 3.99, color: 'blue-white' }
  ];
  
  export const ursaMajorLines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]
  ];
  
