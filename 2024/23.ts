// https://adventofcode.com/2024/day/23

const rawData = `kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`;

const lanPartyCount = (input: string): number => {
  const connectionDataLines = input.split("\n");
  const connectionData = connectionDataLines.map((el) => el.split("-").sort());
  const connectionDataLinesSorted = connectionData.map((el) =>
    el.sort().join("-")
  );

  return [
    ...new Set(
      connectionData.flatMap((el) =>
        connectionData.filter((sub) =>
          (sub.includes(el[0]) || sub.includes(el[1])) && (sub[0] !== el[0] ||
            sub[1] !== el[1])
        )
          .map((sub) => [...new Set([...el, ...sub].sort())].join("-"))
      ),
    ),
  ].map((el) => el.split("-")).filter((el) => {
    const search = connectionDataLinesSorted.filter((cdl) => {
      return cdl === `${el[0]}-${el[1]}` || cdl === `${el[1]}-${el[2]}` ||
        cdl === `${el[0]}-${el[2]}`;
    });
    return search.length === 3;
  }).filter((comps) => comps.some((ch) => ch.at(0) === "t")).length;
};

console.log(lanPartyCount(rawData));

export {};
