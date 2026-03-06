const fs = require('fs');
const path = require('path');

const algebraPath = path.join('src', 'components', 'AlgebraView.jsx');
const ecuacionesPath = path.join('src', 'components', 'EcuacionesView.jsx');
const appPath = path.join('src', 'App.jsx');

let algebra = fs.readFileSync(algebraPath, 'utf8');

let startText = '<button\n                    onClick={() => setIsExercisesOpen(!isExercisesOpen)}\n                    className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all duration-300 group shadow-lg"\n                >';
let startIdx = algebra.indexOf(startText);
if (startIdx === -1) {
    startText = startText.replace(/\n/g, '\r\n');
    startIdx = algebra.indexOf(startText);
}

if (startIdx !== -1) {
    let endIdx = algebra.lastIndexOf('        </div>\n    );\n};');
    if (endIdx === -1) {
        endIdx = algebra.lastIndexOf('        </div>\r\n    );\r\n};');
    }

    if (endIdx !== -1) {
        let exerciseContent = algebra.substring(startIdx, endIdx);
        let sectionEnd = exerciseContent.lastIndexOf('</section>');
        if (sectionEnd !== -1) {
            exerciseContent = exerciseContent.substring(0, sectionEnd);
        }

        let newAlgebra = algebra.substring(0, startIdx) + '\n            </section>\n' + algebra.substring(endIdx);

        newAlgebra = newAlgebra.replace(/\s*const \[isExercisesOpen, setIsExercisesOpen\] = useState\(false\);\r?\n/, '');
        newAlgebra = newAlgebra.replace(/\s*\/\/ Track which exercises are expanded.*?\r?\n/g, '');
        newAlgebra = newAlgebra.replace(/\s*const \[openExercises, setOpenExercises\] = useState\(\[\]\);\r?\n/, '');
        newAlgebra = newAlgebra.replace(/\s*const toggleExercise = \(id\) => \{[\s\S]*?\]\r?\n\s*\);\r?\n\s*\};\r?\n/, '');

        fs.writeFileSync(algebraPath, newAlgebra);

        let ecuacionesContent = `import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, Calculator, Lightbulb } from 'lucide-react';

const EcuacionesView = ({ onBack }) => {
    const [isExercisesOpen, setIsExercisesOpen] = useState(true);
    const [openExercises, setOpenExercises] = useState([]);

    const toggleExercise = (id) => {
        setOpenExercises(prev =>
            prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
        );
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Header & Back Action */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="p-2 rounded-full glass-morphism text-slate-400 hover:text-primary-400 hover:scale-110 transition-all cursor-pointer"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div>
                    <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-primary-500"></span>
                        Unidad 1: Fundamentos
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Ecuaciones de primer grado
                    </h1>
                </div>
            </div>

            <section className="space-y-4">
${exerciseContent}
            </section>
        </div>
    );
};

export default EcuacionesView;
`;
        fs.writeFileSync(ecuacionesPath, ecuacionesContent);

        let app = fs.readFileSync(appPath, 'utf8');
        if (!app.includes('import EcuacionesView')) {
            app = app.replace("import AlgebraView from './components/AlgebraView';", "import AlgebraView from './components/AlgebraView';\nimport EcuacionesView from './components/EcuacionesView';");
        }

        // Use regex for replacing routes so we handle CR/LF gracefully
        if (!app.includes('path="/topic/t1-2"')) {
            app = app.replace(
                /<Route\s+path="\/topic\/t1-1"\s+element={<AlgebraView onBack={handleBackHome} \/>}\s+\/>/,
                match => match + '\n          <Route\n            path="/topic/t1-2"\n            element={<EcuacionesView onBack={handleBackHome} />}\n          />'
            );
        }
        fs.writeFileSync(appPath, app);
        console.log('Success!');
    } else {
        console.log('Could not find end index');
    }
} else {
    console.log('Could not find start index');
}
