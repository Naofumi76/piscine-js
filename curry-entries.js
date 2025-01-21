function defaultCurry(obj1) {
    return function(obj2) {
        return Object.assign({}, obj1, obj2);
    }
}

function mapCurry(func) {
    return function(obj) {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => func([k, v]))
        )
    }
}

function reduceCurry(func) {
    return function(obj, start) {
        return Object.entries(obj).reduce((acc, [key, value])=> func(acc, [key, value]), start)
    }
}

function filterCurry(func) {
    return function(obj) {
        return Object.fromEntries(
            Object.entries(obj).filter(([k, v]) => func([k, v]))
        )
    }
}

function reduceScore(personnel, initVal = 0) {
    return reduceCurry((acc, [key, value]) => {
        if (value.isForceUser) {
            acc += value.pilotingScore + value.shootingScore
        }
        return acc;
    })(personnel, initVal)
}


function filterForce(personnel) {
    return filterCurry(([key, value]) => value.isForceUser && value.shootingScore <= 80)(personnel)
}

function mapAverage(personnel) {
    return mapCurry(([key, value]) => {
        const totalScore = value.pilotingScore + value.shootingScore;
        const averageScore = totalScore / 2
        return [key, { ...value, averageScore }];
    })(personnel);
}



/* const personnel = {
    lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
    sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
    calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
} */

console.log(mapAverage(personnel))

console.log(reduceScore(personnel))
console.log(reduceScore(personnel, 420))

console.log(filterForce(personnel))


console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel)
// output
/* {
  lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
} */
)

console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0))
// output
/* 6 */


console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
    str: 'string',
    nbr: 1,
    arr: [1, 2],
  })
  // output
/*   { str: 'string', arr: [1, 2] } */
  )