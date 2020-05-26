import {RawResult} from './Common';

export let results: RawResult[]=[
{"f":"wasm-bindgen-v0.2.47-keyed","b":"01_run1k","v":[134.194,121.459,115.955,121.213,120.864,117.336,131.926,126.636,124.272,132.079]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"02_replace1k","v":[115.203,115.83,119.173,121.186,126.364]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"03_update10th1k_x16","v":[146.174,148.002,151.497,148.163,140.59]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"04_select1k","v":[21.067,19.896,23.786,18.705,19.896]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"05_swap1k","v":[40.605,42.675,54.717,50.464,45.66]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"06_remove-one-1k","v":[28.402,25.442,29.545,28.425,29.252]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"07_create10k","v":[1222.112,1105.367,1159.221,1166.379,1145.693]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"08_create1k-after1k_x2","v":[238.403,222.106,237.156,294.204,248.482]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"09_clear1k_x8","v":[136.334,118.753,132.061,144.754,121.864]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"21_ready-memory","v":[1.0571517944335938,1.057159423828125,1.057159423828125,1.0571441650390625,1.0571441650390625]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"22_run-memory","v":[1.5462188720703125,1.5462646484375,1.546234130859375,1.5461883544921875,1.5462722778320312]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"23_update5-memory","v":[1.8680686950683594,1.8679542541503906,1.86798095703125,1.8680267333984375,1.8679962158203125]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"24_run5-memory","v":[2.171539306640625,2.1714706420898438,2.1715240478515625,2.1715240478515625,2.171539306640625]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"25_run-clear-memory","v":[2.316417694091797,2.3164329528808594,2.3163719177246094,2.3164024353027344,2.3164329528808594]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"31_startup-ci","v":[1350.0680000000002,1350.408,1350.792,1350.6840000000002]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"32_startup-bt","v":[18.476,20.4,20.539999999999992,20.959999999999997]},
{"f":"wasm-bindgen-v0.2.47-keyed","b":"34_startup-totalbytes","v":[65.251953125,65.251953125,65.251953125,65.251953125]},
{"f":"yew-v0.16.2-keyed","b":"01_run1k","v":[228.404,198.78,218.581,221.485,240.406]},
{"f":"yew-v0.16.2-keyed","b":"02_replace1k","v":[86.72,85.166,86.531,82.068,82.298]},
{"f":"yew-v0.16.2-keyed","b":"03_update10th1k_x16","v":[730.164,766.139,731.033,755.083,723.263]},
{"f":"yew-v0.16.2-keyed","b":"04_select1k","v":[586.733,589.092,611.179,591.106,581.949]},
{"f":"yew-v0.16.2-keyed","b":"05_swap1k","v":[607.884,636.007,606.045,602.641,626.062]},
{"f":"yew-v0.16.2-keyed","b":"06_remove-one-1k","v":[153.362,151.125,153.889,149.862,147.31]},
{"f":"yew-v0.16.2-keyed","b":"07_create10k","v":[2090.735,2152.461,2291.814,2253.821,2265.606]},
{"f":"yew-v0.16.2-keyed","b":"08_create1k-after1k_x2","v":[449.371,481.864,467.01,582.564,599.141]},
{"f":"yew-v0.16.2-keyed","b":"09_clear1k_x8","v":[379.549,386.233,372.865,373.012,366.459]},
{"f":"yew-v0.16.2-keyed","b":"21_ready-memory","v":[1.0675430297851562,1.067535400390625,1.067535400390625,1.0675430297851562,1.0675811767578125]},
{"f":"yew-v0.16.2-keyed","b":"22_run-memory","v":[2.141437530517578,2.141368865966797,2.1413536071777344,2.141376495361328,2.1413230895996094]},
{"f":"yew-v0.16.2-keyed","b":"23_update5-memory","v":[2.143993377685547,2.143951416015625,2.143932342529297,2.1439247131347656,2.144023895263672]},
{"f":"yew-v0.16.2-keyed","b":"24_run5-memory","v":[2.163043975830078,2.077831268310547,2.0777549743652344,2.0777549743652344,2.077739715576172]},
{"f":"yew-v0.16.2-keyed","b":"25_run-clear-memory","v":[2.4068527221679688,2.4073028564453125,2.406890869140625,2.407318115234375,2.4072723388671875]},
{"f":"yew-v0.16.2-keyed","b":"31_startup-ci","v":[1350.644,1350.996,1350.58,1350.324]},
{"f":"yew-v0.16.2-keyed","b":"32_startup-bt","v":[32.251999999999995,30.119999999999994,27.37599999999999,30.35199999999999]},
{"f":"yew-v0.16.2-keyed","b":"34_startup-totalbytes","v":[85.611328125,85.611328125,85.611328125,85.611328125]},
{"f":"yew-baseline-v0.16.2-keyed","b":"01_run1k","v":[217.551,199.706,219.243,222.204,193.342]},
{"f":"yew-baseline-v0.16.2-keyed","b":"02_replace1k","v":[77.833,76.875,85.177,83.126,92.603]},
{"f":"yew-baseline-v0.16.2-keyed","b":"03_update10th1k_x16","v":[849.935,705.966,694.129,891.358,746.385]},
{"f":"yew-baseline-v0.16.2-keyed","b":"04_select1k","v":[586.339,594.814,603.695,575.862,583.216]},
{"f":"yew-baseline-v0.16.2-keyed","b":"05_swap1k","v":[613.011,619.557,629.485,602.918,622.681]},
{"f":"yew-baseline-v0.16.2-keyed","b":"06_remove-one-1k","v":[148.837,155.306,153.872,156.057,146.042]},
{"f":"yew-baseline-v0.16.2-keyed","b":"07_create10k","v":[2045.427,2174.11,2236.417,2229.609,2255.172]},
{"f":"yew-baseline-v0.16.2-keyed","b":"08_create1k-after1k_x2","v":[513.862,489.675,475.759,470.244,469.735]},
{"f":"yew-baseline-v0.16.2-keyed","b":"09_clear1k_x8","v":[360.767,385.571,380.572,440.869,439.504]},
{"f":"yew-baseline-v0.16.2-keyed","b":"21_ready-memory","v":[1.0675277709960938,1.0675430297851562,1.0675430297851562,1.0675277709960938,1.0675506591796875]},
{"f":"yew-baseline-v0.16.2-keyed","b":"22_run-memory","v":[2.141429901123047,2.141376495361328,2.141407012939453,2.141368865966797,2.1413841247558594]},
{"f":"yew-baseline-v0.16.2-keyed","b":"23_update5-memory","v":[2.143951416015625,2.143993377685547,2.1439361572265625,2.1439743041992188,2.143951416015625]},
{"f":"yew-baseline-v0.16.2-keyed","b":"24_run5-memory","v":[2.162822723388672,2.0782623291015625,2.0778236389160156,2.077808380126953,2.0777931213378906]},
{"f":"yew-baseline-v0.16.2-keyed","b":"25_run-clear-memory","v":[2.4068679809570312,2.4069442749023438,2.4072647094726562,2.4072799682617188,2.4072799682617188]},
{"f":"yew-baseline-v0.16.2-keyed","b":"31_startup-ci","v":[1350.772,1350.46,1350.512,1351.1080000000002]},
{"f":"yew-baseline-v0.16.2-keyed","b":"32_startup-bt","v":[29.49199999999999,29.687999999999995,27.259999999999998,27.007999999999992]},
{"f":"yew-baseline-v0.16.2-keyed","b":"34_startup-totalbytes","v":[85.6123046875,85.6123046875,85.6123046875,85.6123046875]},];
export let frameworks = [{"name":"wasm-bindgen-v0.2.47-keyed","keyed":true},{"name":"yew-v0.16.2-keyed","keyed":true},{"name":"yew-baseline-v0.16.2-keyed","keyed":true}];
export let benchmarks = [{"id":"01_run1k","label":"create rows","description":"creating 1,000 rows","type":0},{"id":"02_replace1k","label":"replace all rows","description":"updating all 1,000 rows (5 warmup runs).","type":0},{"id":"03_update10th1k_x16","label":"partial update","description":"updating every 10th row for 1,000 rows (3 warmup runs). 16x CPU slowdown.","type":0,"throttleCPU":16},{"id":"04_select1k","label":"select row","description":"highlighting a selected row. (5 warmup runs). 16x CPU slowdown.","type":0,"throttleCPU":16},{"id":"05_swap1k","label":"swap rows","description":"swap 2 rows for table with 1,000 rows. (5 warmup runs). 4x CPU slowdown.","type":0,"throttleCPU":4},{"id":"06_remove-one-1k","label":"remove row","description":"removing one row. (5 warmup runs).","type":0},{"id":"07_create10k","label":"create many rows","description":"creating 10,000 rows","type":0},{"id":"08_create1k-after1k_x2","label":"append rows to large table","description":"appending 1,000 to a table of 10,000 rows. 2x CPU slowdown","type":0,"throttleCPU":2},{"id":"09_clear1k_x8","label":"clear rows","description":"clearing a table with 1,000 rows. 8x CPU slowdown","type":0,"throttleCPU":8},{"id":"21_ready-memory","label":"ready memory","description":"Memory usage after page load.","type":1},{"id":"22_run-memory","label":"run memory","description":"Memory usage after adding 1000 rows.","type":1},{"id":"23_update5-memory","label":"update eatch 10th row for 1k rows (5 cycles)","description":"Memory usage after clicking update every 10th row 5 times","type":1},{"id":"24_run5-memory","label":"replace 1k rows (5 cycles)","description":"Memory usage after clicking create 1000 rows 5 times","type":1},{"id":"25_run-clear-memory","label":"creating/clearing 1k rows (5 cycles)","description":"Memory usage after creating and clearing 1000 rows 5 times","type":1},{"id":"31_startup-ci","label":"consistently interactive","description":"a pessimistic TTI - when the CPU and network are both definitely very idle. (no more CPU tasks over 50ms)","type":2,"property":"TimeToConsistentlyInteractive"},{"id":"32_startup-bt","label":"script bootup time","description":"the total ms required to parse/compile/evaluate all the page's scripts","type":2,"property":"ScriptBootUpTtime"},{"id":"34_startup-totalbytes","label":"total kilobyte weight","description":"network transfer cost (post-compression) of all the resources loaded into the page.","type":2,"property":"TotalKiloByteWeight"}];
