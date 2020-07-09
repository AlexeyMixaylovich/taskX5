//   Необходимо создать вложенную древовидную структуру категорий.
const input = `{
  "id": 0,
  "childs": [
    {
      "id": 1,
      "childs": [
        {
          "id": 2,
          "childs": [
            {
              "id": 3,
              "childs": [
                {
                  "id": 4,
                  "childs": [
                    {
                      "id": 10,
                      "childs": [
                        {
                          "id": 11,
                          "childs": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 5,
                  "childs": []
                }
              ]
            },
            {
              "id": 6,
              "childs": []
            },
            {
              "id": 13,
              "childs": []
            }
          ]
        },
        {
          "id": 7,
          "childs": []
        }
      ]
    },
    {
      "id": 8,
      "childs": [
        {
          "id": 12,
          "childs": []
        },
        {
          "id": 14,
          "childs": []
        }
      ]
    },
    {
      "id": 9,
      "childs": []
    }
  ]
}`;

let cats = [
  { id: 1, parent: 0 },
  { id: 2, parent: 1 },
  { id: 3, parent: 2 },
  { id: 4, parent: 3 },
  { id: 5, parent: 3 },
  { id: 6, parent: 2 },
  { id: 7, parent: 1 },
  { id: 8, parent: 0 },
  { id: 9, parent: 0 },
  { id: 10, parent: 4 },
  { id: 11, parent: 10 },
  { id: 12, parent: 8 },
  { id: 13, parent: 2 },
  { id: 14, parent: 8 },
];

const findNestAndAddChilds = ({ id, childs }, addFunc, el) =>
  id !== el.parent
    ? childs.some((r) => findNestAndAddChilds(r, addFunc, el))
    : addFunc(childs, el);

const addChilds = (childs, el) =>
  childs.push({
    id: el.id,
    childs: [],
  });

const reduceFunc = (t, el) => {
  findNestAndAddChilds(t, addChilds, el);
  return t;
};

const startTree = { id: 0, childs: [] };

const tree = cats.sort((a, b) => a.id - b.id).reduce(reduceFunc, startTree);

const jsonTree = JSON.stringify(tree);
const jsonInpur = JSON.stringify(JSON.parse(input));

console.log(jsonTree === jsonInpur);
