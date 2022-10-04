export interface Parameters {
  email: string;
  format: string;
  start_time: string;
  end_time?: string;
  timezone?: number;
  limit?: number;
  offset?: number;
  conditions: string[][];
}