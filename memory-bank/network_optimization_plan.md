# Plano de Otimização de Rede e Logging

## Objetivo
Otimizar o tráfego de rede do MMORPG, eliminando eventos desnecessários, reduzindo payloads, evitando duplicidade, garantindo ordem lógica dos eventos e robustez no logging (serializationTimeMs, padronização de tipos).

---

## Tarefas Prioritárias

### 1. Correção do serializationTimeMs
- [x] Revisar todos os pontos onde serializationTimeMs é calculado (JSON e binário)
- [x] Garantir que o tempo de serialização seja sempre registrado, inclusive em eventos binários
- [x] Corrigir casos onde serializationTimeMs aparece como None
- [x] Adicionar testes/logs para validar a medição em todos os tipos de evento
- **Resumo:** Padronizado uso de performance.now() e valores numéricos em todos os eventos binários críticos.

### 2. Eliminação de Eventos Vazios
- [x] Identificar todos os eventos que podem ser enviados "vazios" (ex: MONSTER_DELTA_UPDATE com entitiesSent = 0)
- [x] Adicionar checagem antes do envio para evitar pacotes desnecessários
- [x] Auditar outros eventos além de MONSTER_DELTA_UPDATE para identificar casos semelhantes
- [x] Testar e validar que eventos vazios não são mais enviados
- **Resumo:** Eventos como MONSTER_DELTA_UPDATE e WORLD_UPDATE só são enviados se houver entidades relevantes.

### 3. Padronização e Refatoração dos Tipos de Evento
- [x] Revisar todos os tipos de evento (CUSTOM, EVENTS, BINARY_EVENTS)
- [x] Refatorar nomes/códigos para padronização clara (ex: EVENT_TYPE.BINARY, EVENT_TYPE.JSON, EVENT_TYPE.CUSTOM)
- [x] Atualizar todos os pontos do código que utilizam os tipos antigos
- [x] Documentar a nova padronização no memory-bank
- **Resumo:** Criado objeto EVENT_TYPE centralizado, backend e utilitários refatorados, documentação criada em eventType_convention.md.

### 4. Otimização de Payloads Grandes
- [x] Centralizar a distância de renderização usando WORLD.SIZE.VISIBLE_RANGE em todo o backend (eliminando valores hardcoded)
- [x] Implementar serialização compacta para monstros e objetos do mundo no payload inicial do world:init
- [ ] Implementar lazy loading incremental: enviar detalhes completos de entidades apenas quando o jogador se aproximar (em andamento)
- [x] Remover campos não essenciais do payload inicial (apenas dados mínimos para renderização)
- [ ] Testar impacto real na redução do payload e experiência do jogador
- **Resumo:** O payload inicial agora é muito menor, apenas com dados essenciais. O sistema está pronto para lazy loading incremental.

### 5. Prevenção de Duplicidade de Eventos
- [ ] Adicionar lógica para evitar envio duplicado de eventos para o mesmo jogador no mesmo tick
- [ ] Auditar logs para identificar padrões de duplicidade
- [ ] Implementar testes automatizados para garantir ausência de duplicidade

### 6. Garantia de Sequência Lógica dos Eventos
- [ ] Garantir que eventos como world:init sempre precedam WORLD_UPDATE para cada jogador
- [ ] Adicionar validação no servidor para ordem dos eventos críticos
- [ ] Testar cenários de conexão/reconexão para garantir robustez

### 7. Métricas e Relatórios no Painel SPA (/audit)
- [x] Atualizar painel SPA para reconhecer e filtrar os novos tipos padronizados
- [ ] Implementar relatório de latência entre eventos por jogador
- [ ] Implementar relatório de payload médio por tipo de evento
- [ ] Implementar relatório de duplicidade de eventos
- [ ] Implementar relatório de sequência lógica dos eventos
- [ ] Adicionar gráficos e filtros para essas métricas
- **Resumo:** Filtro de tipos do painel SPA atualizado para os novos valores padronizados.

---

## Progresso Atual
- [x] Logging padronizado para todos os eventos (binários e JSON)
- [x] Painel SPA funcional com filtros, gráficos e paginação
- [x] Correção de serializationTimeMs concluída
- [x] Eliminação de eventos vazios concluída
- [x] Refatoração dos tipos de evento concluída
- [x] Centralização da distância de renderização concluída
- [x] Serialização compacta no world:init concluída
- [ ] Lazy loading incremental em andamento
- [ ] Testes de impacto do payload em andamento
- [ ] Prevenção de duplicidade pendente
- [ ] Garantia de sequência lógica pendente
- [x] Atualização do painel SPA concluída
- [x] Documentação da convenção de tipos de evento concluída
- [ ] Relatórios avançados no painel SPA pendente

---

## Decisões Tomadas
- Foco principal: otimização de rede (payload, duplicidade, ordem)
- Padronização dos tipos de evento feita via refatoração de código e documentação
- Payload inicial agora é mínimo e eficiente, pronto para expansão incremental
- Métricas avançadas serão implementadas no painel SPA para facilitar análise

---

## Próximos Passos
1. Finalizar lazy loading incremental e updates dinâmicos de entidades
2. Implementar lógica anti-duplicidade
3. Garantir sequência lógica dos eventos
4. Adicionar relatórios avançados no painel SPA
5. Testar impacto real das otimizações na experiência do jogador

---

## Observações
- Todas as mudanças devem ser documentadas no memory-bank
- Testes automatizados e logs detalhados são obrigatórios para cada etapa
- Revisar impacto de cada otimização na experiência do jogador antes de avançar para produção 