<template>
  <div class="editor">
    <div class="coming-soon-banner">
      <span class="cs-icon">💳</span>
      <div>
        <h3 class="cs-title">Payments Overview</h3>
        <p class="cs-sub">Payment submissions will appear here once the Mobile Money integration is live.</p>
      </div>
    </div>

    <div class="placeholder-table">
      <div class="table-header">
        <span>Name</span>
        <span>Phone</span>
        <span>Amount</span>
        <span>Method</span>
        <span>Date</span>
        <span>Status</span>
      </div>
      <div class="table-empty">
        <span>📭</span>
        <p>No payment records yet.</p>
        <p class="hint">When users submit payments via the site, their details will appear here for verification.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsOverview'
}
</script>

<style scoped>
.editor { max-width: 900px; }

.coming-soon-banner {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: linear-gradient(135deg, rgba(255,215,0,0.06), rgba(255,165,0,0.04));
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 14px;
  padding: 24px 28px;
  margin-bottom: 32px;
}
.cs-icon { font-size: 36px; flex-shrink: 0; margin-top: 2px; }
.cs-title { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 6px; }
.cs-sub { font-size: 14px; color: #888; line-height: 1.6; }

.placeholder-table {
  background: #111;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  overflow: hidden;
}
.table-header {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 1.5fr 1fr;
  gap: 12px;
  padding: 14px 20px;
  background: #1a1a1a;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  font-size: 11px;
  font-weight: 700;
  color: #555;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.table-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  gap: 10px;
}
.table-empty span { font-size: 36px; }
.table-empty p { font-size: 15px; color: #555; }
.hint { font-size: 13px; color: #3a3a3a; max-width: 400px; line-height: 1.5; }
</style>
