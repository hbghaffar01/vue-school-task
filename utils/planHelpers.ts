
interface PlanDetail {
  detail: string,
  accessible: boolean,
  highlighted?: boolean,
}
export interface PricingPlan {
  plan_name: PlanName,
  plan_details: PlanDetail[],
}

export interface PricingPlans {
  pricing_plans: PricingPlan[],
}

export enum PlanName {
  BASIC = 'Basic',
  PRO = 'Professional',
  PREMIUM = 'Premium',
}

export const iconMap = {
  [PlanName.BASIC]: 'leaf',
  [PlanName.PRO]: 'rocket',
  [PlanName.PREMIUM]: 'thunder',
};
