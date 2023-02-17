const calculateArea = (shape, values) => {
  const myShape = {
    rectangle: (l, b) => l * b,
    square: (l) => l * l,
    circle: (r) => 3.14 * r * r,
    triangle: (b, h) => (b * h) / 2,
  };

  const areaFn = myShape[shape.toLowerCase()];

  if (areaFn) {
    return Promise.resolve(
      Array.isArray(values) ? areaFn(...values) : areaFn(values)
    );
  }
  return Promise.reject([-1]);
};

const getAreas = async (shapes, values_arr) => {
  if (shapes.length !== values_arr.length) {
    return [-1];
  }

  const promises = shapes.map((shape, i) => {
    const values = Array.isArray(values_arr[i])
      ? values_arr[i]
      : [values_arr[i]];
    return calculateArea(shape, values);
  });

  try {
    const areas = await Promise.all(promises);
    return areas.map((area) => {
      return Number.isInteger(area) ? area : area.toFixed(1);
    });
  } catch (error) {
    return [-1];
  }
};
getAreas(
  ["square", "rectangle", "triangle", "circle"],
  [2, [4, 5], [4, 5], 5]
).then((result) => console.log(result));
getAreas(
  ["s3quare", "rectangle", "triangle", "circle"],
  [2, [4, 5], [4, 5], 5]
).then((result) => console.log(result));
