export declare const Composer: any;
export declare const Markup: any;
export declare const BaseScene: any;
export declare const session: any;
export declare const Stage: any;
export declare const WizardScene: any;
export { Middleware, Telegram } from 'telegraf';
export { Context, Multigraf, BotOptions, Bot, LaunchOptions, } from './multigraf';
import { Context } from './multigraf';
import { HearsTriggers as HearsTriggersGeneric } from 'telegraf/typings/composer';
export declare type HearsTriggers<TContext extends Context = Context> = HearsTriggersGeneric<TContext>;
