/**
 * Empty object for groups in scenegraph.
 *
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function (exports, data) {
    "use strict";

    /**
     * Create an instance of the model defined in this module.
     *
     * @parameter object with fields:
     * @returns instance of this model.
     */
    exports.create = function (parameter) {
        if (parameter) {
            var scale = parameter.scale;
            // Each face shows a different area of the given texture (e.g, a dice).cd 
        }
        // Set default values if parameter is undefined.
        if (scale === undefined) {
            scale = 1;
        }
        // Instance of the model to be returned.
      const instance = {};

      // prettier-ignore
        instance.vertices = [
            [0, 0, 0], //0
            [390, 0, 0], //1
            [360, 150, 0], //2
            [380, 150, 0], //3
            [400, 130, 0], //4
            [310, 60, 0],  //5
            [330, 50, 0],  //6

            [360, -150, 0], //7
            [380, -150, 0], //8
            [400, -130, 0], //9
            [310, -60, 0],  //10
            [330, -50, 0],  //11

            [50, 0, 10], //12
            [100, 0, 60], //13
            [330, 0, 40], //14
            [400, 0, 70], //15
            [440, 0, 70], //16

            [400, 50, 50], //17
            [440, 50, 50], //18

            [400, -50, 50], //19
            [440, -50, 50], //20

            [40, 20, 0], //21

            [40, -20, 0], //22

            [60, 25, 0], //23
            [60, -25, 0], //24

            [240, 40, 35], //25
            [240, -40, 35],  //26
            [280, 0, 45], //27

            [140, 30, 0], //28
            [146, 50, 0], //29
            [140, 30, 20], //30
            [146, 50, 20], //31

            [140, -30, 0], //32
            [146, -50, 0], //33
            [140, -30, 20], //34
            [146, -50, 20] //35
        ];

        instance.polygonVertices = [
            [0, 2, 3, 4, 5, 6, 1],
            [0, 7, 8, 9, 10, 11, 1],
            [0, 12, 13, 14, 1],
            [1, 18, 17, 14],
            [1, 20, 19, 14],
            [0, 12, 22],
            [0, 12, 21],
            [22, 21, 13],
            [13, 22, 24],
            [13, 21, 23],
            [13, 27, 25],
            [13, 27, 26],
            [10, 26, 27, 14, 1],
            [5, 25, 27, 14, 1],
            [28, 29, 31, 30],
            [32, 33, 35, 34],

            [30, 28, 21, 13],
            [34, 32, 22, 13],

            [29, 5, 25, 31],

            [33, 10, 26, 35],
            [25, 13, 30],
            [26, 13, 34]
        ];
        data.setColorForAllPolygons.call(instance, 9);
        data.applyScale.call(instance, scale);
        return instance;
    };
});
