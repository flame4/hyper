window.BENCHMARK_DATA = {
  "lastUpdate": 1736231428819,
  "repoUrl": "https://github.com/flame4/hyper",
  "entries": {
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "30f2961e89eb306780d856e6e2c1ee10ffbbafd2",
          "message": "v1.5.2",
          "timestamp": "2024-12-16T11:16:22-05:00",
          "tree_id": "68ea849c99f160502371cb06dc26fcc8a79ff738",
          "url": "https://github.com/flame4/hyper/commit/30f2961e89eb306780d856e6e2c1ee10ffbbafd2"
        },
        "date": 1736231355747,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46045,
            "range": "± 9352.51",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "30f2961e89eb306780d856e6e2c1ee10ffbbafd2",
          "message": "v1.5.2",
          "timestamp": "2024-12-16T11:16:22-05:00",
          "tree_id": "68ea849c99f160502371cb06dc26fcc8a79ff738",
          "url": "https://github.com/flame4/hyper/commit/30f2961e89eb306780d856e6e2c1ee10ffbbafd2"
        },
        "date": 1736231423082,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69497,
            "range": "± 3958.86",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 5565729,
            "range": "± 309344.79",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20970,
            "range": "± 509.21",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22968,
            "range": "± 562.26",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 30942,
            "range": "± 617.39",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 96767,
            "range": "± 1837.78",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 35178,
            "range": "± 13145.43",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 91281,
            "range": "± 2018.03",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 24055649,
            "range": "± 32574826.25",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7755801,
            "range": "± 147155.75",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7511723,
            "range": "± 89945.44",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49434366,
            "range": "± 2154266.61",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51696985,
            "range": "± 2244974.58",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5170724,
            "range": "± 234887.82",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}