<template>
  <div class="editor">
    <p class="editor-desc">
      Manage Almax Football Predictions shown on the site. Add upcoming matches with tips and update results once played.
    </p>

    <!-- List -->
    <div v-if="loading" class="state-msg">Loading predictions…</div>
    <div v-else>
      <div v-if="predictions.length === 0" class="empty-state">No predictions yet. Add your first one below.</div>
      <div v-else class="list">
        <div v-for="p in predictions" :key="p.id" class="pred-row">
          <div class="pred-info">
            <span class="pred-match">{{ p.home }} vs {{ p.away }}</span>
            <span class="pred-comp">{{ p.competition }} · {{ p.kickoff }}</span>
            <span class="pred-tip">💡 {{ p.tip }}<template v-if="p.odds"> · Odds: {{ p.odds }}</template></span>
          </div>
          <div class="pred-actions">
            <span :class="['result-badge', 'result-' + p.result]">{{ resultLabel(p.result) }}</span>
            <select class="result-select" :value="p.result" @change="updateResult(p.id, $event.target.value)">
              <option value="pending">Pending</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
            </select>
            <button class="delete-btn" @click="deletePrediction(p.id)" title="Delete">🗑</button>
          </div>
        </div>
      </div>

      <!-- Add form -->
      <div class="add-section">
        <h3 class="add-title">Add New Prediction</h3>
        <form @submit.prevent="addPrediction" class="editor-form">
          <div class="fields-row">
            <div class="field">
              <label>Home Team</label>
              <input v-model="newPred.home" type="text" placeholder="e.g. Arsenal" required />
            </div>
            <div class="field">
              <label>Away Team</label>
              <input v-model="newPred.away" type="text" placeholder="e.g. Chelsea" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Competition</label>
              <input v-model="newPred.competition" type="text" placeholder="e.g. Premier League" required />
            </div>
            <div class="field">
              <label>Kick-off Time</label>
              <input v-model="newPred.kickoff" type="text" placeholder="e.g. 20:00" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field" style="grid-column: 1 / -1">
              <label>Tip / Prediction</label>
              <input v-model="newPred.tip" type="text" placeholder="e.g. Both Teams to Score" required />
            </div>
          </div>
          <div class="fields-row">
            <div class="field">
              <label>Odds (optional)</label>
              <input v-model="newPred.odds" type="text" placeholder="e.g. 1.85" />
            </div>
            <div class="field">
              <label>Initial Result</label>
              <select v-model="newPred.result" class="result-select-form">
                <option value="pending">Pending</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="save-btn" :disabled="saving">
              {{ saving ? 'Adding…' : '+ Add Prediction' }}
            </button>
            <span v-if="saved" class="saved-msg">✓ Prediction added!</span>
            <span v-if="saveError" class="error-msg">⚠ {{ saveError }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlmaxPredictionsEditor',
  data() {
    return {
      predictions: [],
      loading: true,
      saving: false,
      saved: false,
      saveError: '',
      newPred: { home: '', away: '', competition: '', kickoff: '', tip: '', odds: '', result: 'pending' }
    }
  },
  async mounted() {
    await this.loadPredictions()
  },
  methods: {
    resultLabel(r) {
      return r === 'won' ? '✓ Won' : r === 'lost' ? '✗ Lost' : '⏳ Pending'
    },
    async loadPredictions() {
      this.loading = true
      try {
        const { data } = await axios.get('/api/almax-predictions')
        this.predictions = data
      } catch {
        // server unavailable
      } finally {
        this.loading = false
      }
    },
    async addPrediction() {
      this.saving = true
      this.saved = false
      this.saveError = ''
      try {
        const { data } = await axios.post('/api/almax-predictions', { ...this.newPred })
        this.predictions.push(data)
        this.saved = true
        this.newPred = { home: '', away: '', competition: '', kickoff: '', tip: '', odds: '', result: 'pending' }
        setTimeout(() => { this.saved = false }, 3000)
      } catch {
        this.saveError = 'Failed to save. Make sure the server is running.'
      } finally {
        this.saving = false
      }
    },
    async updateResult(id, result) {
      try {
        const { data } = await axios.patch('/api/almax-predictions/' + id, { result })
        const idx = this.predictions.findIndex(p => p.id === id)
        if (idx !== -1) this.predictions.splice(idx, 1, data)
      } catch {
        alert('Update failed. Make sure the server is running.')
      }
    },
    async deletePrediction(id) {
      if (!confirm('Delete this prediction?')) return
      try {
        await axios.delete('/api/almax-predictions/' + id)
        this.predictions = this.predictions.filter(p => p.id !== id)
      } catch {
        alert('Delete failed. Make sure the server is running.')
      }
    }
  }
}
</script>

<style scoped>
.editor { max-width: 760px; }
.editor-desc { font-size: 14px; color: #888; margin-bottom: 24px; line-height: 1.6; }
.state-msg { padding: 14px 18px; border-radius: 10px; background: #1a1a1a; font-size: 14px; color: #888; margin-bottom: 24px; }
.empty-state { padding: 20px; text-align: center; color: #555; font-size: 14px; background: #111; border-radius: 10px; margin-bottom: 24px; }

.list { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; overflow: hidden; margin-bottom: 32px; }
.pred-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.05); gap: 12px; flex-wrap: wrap; }
.pred-row:last-child { border-bottom: none; }
.pred-info { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; }
.pred-match { font-size: 14px; font-weight: 700; color: #fff; }
.pred-comp { font-size: 12px; color: #666; }
.pred-tip { font-size: 12px; color: #FFD700; opacity: 0.85; margin-top: 2px; }
.pred-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

.result-badge { font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; white-space: nowrap; }
.result-pending { background: rgba(255,193,7,0.15); color: #FFC107; }
.result-won { background: rgba(76,175,80,0.15); color: #4CAF50; }
.result-lost { background: rgba(244,67,54,0.15); color: #F44336; }

.result-select { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.2); border-radius: 7px; color: #fff; font-size: 12px; padding: 5px 8px; cursor: pointer; outline: none; }
.delete-btn { background: none; border: none; cursor: pointer; font-size: 16px; padding: 4px; opacity: 0.6; transition: opacity 0.2s; }
.delete-btn:hover { opacity: 1; }

.add-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 16px; }

.editor-form { background: #111; border: 1px solid rgba(255,215,0,0.1); border-radius: 14px; padding: 24px; }
.fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.field label { font-size: 11px; font-weight: 700; color: #888; letter-spacing: 1px; text-transform: uppercase; }
.field input[type="text"] { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
.field input:focus { border-color: rgba(255,215,0,0.45); }
.field input::placeholder { color: #444; }
.result-select-form { background: #1a1a1a; border: 1px solid rgba(255,215,0,0.15); border-radius: 8px; padding: 11px 14px; color: #fff; font-size: 14px; outline: none; cursor: pointer; }

.form-actions { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
.save-btn { background: linear-gradient(135deg,#FFD700,#FFA500); color: #000; border: none; border-radius: 9px; padding: 12px 28px; font-size: 14px; font-weight: 800; cursor: pointer; transition: opacity 0.2s; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.saved-msg { color: #4caf50; font-size: 13px; font-weight: 600; }
.error-msg { color: #ff5252; font-size: 13px; }

@media (max-width: 600px) { .fields-row { grid-template-columns: 1fr; } }
</style>
