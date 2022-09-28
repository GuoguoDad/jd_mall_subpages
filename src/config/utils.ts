/**
 * 研发环境（详细说明，参见 STDDM201807009-研发环境说明.pdf）：
 * - 开发环境（DEV），用于开发调试、单系统测试
 * - 集成环境（SIT，System Integration Test），用于系统集成测试
 * - 预生产环境（PRE，Pre-Product），用于回归测试
 * - 压测环境（PST，Pressure Test），用于压力测试
 * - 生产环境（PRD，Product），用于生产运营
 *
 * DEV -> SIT -> PRE -> PRD
 */
export enum SNENV {
  /** DEV，本地 mock 使用 */
  DEV = 'dev',
  /** SIT */
  SIT = 'sit',
  /** 徐庄PRE */
  PREXZ = 'prexz',
  /** 新港PRE */
  PREXG = 'prexg',
  /** PRD */
  PRD = 'prd'
}
