// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        mutate() {
            console.log(this.dna)
            //select random index from dna array
            let i = Math.floor(Math.random() * this.dna.length);
            //store random dna base at index
            let getCurrentBase = this.dna[i];
            console.log(getCurrentBase)
            //return array of possible bases minus current one
            let replacementBases = ['A', 'T', 'C', 'G'];
            replacementBases.splice(replacementBases.indexOf(getCurrentBase), 1)
            //replace getCurrentBase with new base
            replaceBase = replacementBases[Math.floor(Math.random() * 3)];
            console.log(`Changed ${getCurrentBase} to ${replaceBase} on ${i}`);
            //put new base in array
            return this.dna.splice(i, 1, replaceBase);
        },
        compareDNA(pArquor2) {
            //console.log(this.dna)
            //console.log(pArquor2.dna)
            let baseMatches = 0;
            let baseAmount = this.dna.length;
            for (var i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === pArquor2.dna[i]) {
                    //console.log('dna1',this.dna[i],'dna2',pArquor2.dna[i])
                    baseMatches += 1;
                }
            };
            //console.log('basematches',baseMatches,'baseamount',baseAmount)
            let percentageMatch = ((baseMatches / baseAmount) * 100).toFixed(0);
            return console.log(`specimen #1 and specimen #2 have ${percentageMatch}% DNA in common`);
        },
        willLikelySurvive() {
            let CGBases = 0;
            let baseAmount = this.dna.length;
            for (var i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    CGBases += 1;
                };
            };
            let CGPerc = ((CGBases / baseAmount) * 100).toFixed(0);
            //console.log(CGPerc)
            if (CGPerc >= 60) {
                return true;
            } else {
                return false;
            };
        },
    }
}
const pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor)
/*
//mutate() testing
const pAequor = pAequorFactory(1, mockUpStrand());
console.log(`pAequor BEFORE mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}\n`);
pAequor.mutate();
console.log(`pAequor AFTER mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`);
*/
/*
//compareDNA() testing
const pAequor1 = pAequorFactory(2, mockUpStrand());
const pAequor2 = pAequorFactory(3, mockUpStrand());
pAequor1.compareDNA(pAequor2);
*/
//willLikelySurvive() testing
//let pAeQuorSpecimen =1;
//console.log(pAequorFactory(pAeQuorSpecimen, mockUpStrand()).willLikelySurvive()==true)

let pAequorSurvivors = [];
let thirtySurvivors = 0;
let pAequorSpecimen = 1;
while (thirtySurvivors < 30) {
    if (pAequorFactory(pAequorSpecimen, mockUpStrand()).willLikelySurvive() == true) {
        pAequorSurvivors.push(pAequorFactory(pAequorSpecimen, mockUpStrand()));
        pAequorSpecimen += 1;
        console.log('specimen', pAequorSpecimen)
        thirtySurvivors += 1;
    };
};
console.log(pAequorSurvivors)
