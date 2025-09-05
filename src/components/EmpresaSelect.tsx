import React from 'react';

interface EmpresaSelectProps {
  onSelect: (empresa: 'pralog' | 'jejuro') => void;
}

const empresas = [
  {
    id: 'pralog',
    nome: 'Grupo PRA LOG',
    logo: `${import.meta.env.BASE_URL}praloglogo.jpg`, // Agora usa praloglogo.jpg
    descricao: '', // Remover descrição
  },
  {
    id: 'jejuro',
    nome: 'Grupo JEJURO',
    logo: `${import.meta.env.BASE_URL}bobs-logo 2025.png`,
    descricao: '',
  },
];

const EmpresaSelect: React.FC<EmpresaSelectProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1B34] to-[#1E3A8A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#2F6BFF] to-[#1E40AF] rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 border-2 border-white/20 overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}logocfsmart.jpg`} 
              alt="CF Smart Logo" 
              className="w-16 h-16 object-cover rounded-xl"
            />
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Smart Tax</h1>
          <p className="text-[#E5F0FF]/80 text-base mb-1">Dashboard para Visualização de Situação Tributária</p>
        </div>
        <div className="flex flex-col gap-6">
          {empresas.map((empresa) => (
            <button
              key={empresa.id}
              onClick={() => onSelect(empresa.id as 'pralog' | 'jejuro')}
              className="flex items-center gap-4 bg-[#0F2A5F] hover:bg-[#1E40AF]/80 border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F6BFF]"
            >
              <img src={empresa.logo} alt={empresa.nome} className="w-14 h-14 object-cover rounded-xl border-2 border-white/20" />
              <div className="flex flex-col items-start">
                <span className="text-white text-lg font-semibold">{empresa.nome}</span>
                {/* Não exibir descrição */}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpresaSelect;
