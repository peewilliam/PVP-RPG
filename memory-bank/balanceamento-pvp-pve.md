# Documentação de Balanceamento PvP/PvE

## 1. ProgressionSystem.js: O Coração do Balanceamento

Todo o balanceamento de XP, level, benefícios por level, multiplicador global de XP, dano PvP/PvE, defesa, HP e mana é feito no arquivo:

```
shared/progressionSystem.js
```

### Funções principais:
- `getXpForLevel(level)`: XP necessário para cada level.
- `getLevelBenefits(level)`: Retorna os status (HP, mana, ataque, defesa) para cada level.
- `calculateXpGain(baseXp)`: Aplica o multiplicador global de XP.
- `calculateDamage({ attackerAttack, defenderDefense, isPvP, isPvE, damageMultiplier })`: Calcula o dano real considerando ataque, defesa, PvP/PvE e multiplicadores.
- `applyLevelUp(oldLevel, newLevel, currentStats)`: Aplica os benefícios ao upar.
- `XP_MULTIPLIER`: Variável global para eventos de XP em dobro, triplo, etc.

## 2. Como funciona o cálculo de XP
- O XP ganho é sempre passado por `calculateXpGain`, que aplica o multiplicador global.
- O XP necessário para upar é definido por `getXpForLevel`.
- O progressionSystem já prevê bônus/malus por diferença de level entre player e monstro.
- Para eventos de XP em dobro, basta alterar `XP_MULTIPLIER` para 2.

## 3. Como funciona o cálculo de dano PvP/PvE
- O dano é sempre calculado por `calculateDamage`.
- PvP: dano reduzido automaticamente (ex: 20% a menos).
- PvE: dano normal.
- Defesa do alvo é sempre descontada.
- O valor exibido no cliente é sempre o dano real sofrido (após defesa e multiplicadores).

## 4. Como ajustar o balanceamento
- Para aumentar/diminuir o XP necessário por level, altere a fórmula de `getXpForLevel`.
- Para mudar os status ganhos por level, altere `getLevelBenefits`.
- Para ajustar o dano, defesa, HP, mana, altere os retornos de `getLevelBenefits`.
- Para eventos de XP em dobro, altere apenas `XP_MULTIPLIER`.
- Para ajustar o dano PvP, altere o multiplicador dentro de `calculateDamage`.

## 5. Recomendações para eventos
- Para eventos de XP em dobro, triplo, etc., basta alterar `XP_MULTIPLIER` no progressionSystem.js.
- Para eventos de dano aumentado/reduzido, adicione um multiplicador extra em `calculateDamage`.

## 6. Dicas para testes e simulações
- Use o script de simulação de XP (`debug/test-xp.js`) para prever o tempo de grind, impacto de monstros, etc.
- Teste o dano real no cliente: o valor exibido será sempre igual à diferença real de HP do alvo.

## 7. Exemplo prático de ajuste
```js
// Para XP em dobro:
import { setXpMultiplier } from './progressionSystem.js';
setXpMultiplier(2); // XP em dobro

// Para balancear status por level:
export function getLevelBenefits(level) {
  return {
    maxHp: 100 + (level - 1) * 15, // Mais HP por level
    maxMana: 50 + (level - 1) * 7,
    defense: 5 + (level - 1) * 3,
    attack: 10 + (level - 1) * 2,
  };
}
```

---

**Resumo:**
- Tudo que envolve progressão, XP, dano, defesa, HP, mana e eventos está centralizado em `progressionSystem.js`.
- O valor exibido de dano no cliente é sempre o real sofrido.
- Para balancear, basta alterar esse arquivo e testar! 